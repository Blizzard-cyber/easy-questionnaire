<template>
	<view class="content">
		<!-- 顶部文字 -->
		<text class="tit">{{$t('common.verifyCodePlaceholder')}}</text>
		<text class="tip">{{tipText}}</text>
		<uni-forms>
		<!-- 登录框 (选择手机号所属国家和地区需要另行实现) -->
			<uni-easyinput type="number" class="easyinput" :inputBorder="false"
				v-model="code" maxlength="6" :placeholder="$t('common.verifyCodePlaceholder')">
				<template v-slot:right>
					<uni-send-sms-code :phone="phone" ref="sendSmsCode"></uni-send-sms-code>
				</template>
			</uni-easyinput>
			<button class="send-btn" :disabled="!canSubmit" :type="canSubmit?'primary':'default'"
				@click="submit">{{$t('common.login')}}</button>
		</uni-forms>
		<uni-quick-login agree></uni-quick-login>
	</view>
</template>
<script>
	import mixin from '../common/login-page.mixin.js';
	export default {
		mixins:[mixin],
		data() {
			return {
				code:'',
				phone:''
			}
		},
		computed: {
			tipText() {
				return this.$t('common.verifyCodeSend')+ `${this.phone}。`;
			},
			canSubmit(){
				return this.code.length==6;
			}
		},
		onLoad({phoneNumber,phoneArea}) {
			this.phone = phoneNumber;
		},
		onReady() {
			if(this.phone.length==11){
				this.$refs.sendSmsCode.start();
			}
		},
		methods: {
			submit(){ //完成并提交
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'loginBySms',
						params:{
							"mobile":this.phone,
							"code":this.code
						},
					},
					success: ({result}) => {
						if(result.code === 0){
							this.loginSuccess(result)
						}else{
							uni.showModal({
								content: result.msg,
								showCancel: false
							});
						}
					}
				})
			}
		}
	}
</script>
<style>
	@import url("../common/login-page.css");
</style>
