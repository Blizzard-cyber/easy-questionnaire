<template>
	<view class="uni-container">
		<uni-forms ref="form" :value="formData" :rules="rules" validate-trigger="submit" err-show-type="undertext">
			<uni-forms-item name="username" >
				<uni-easyinput :inputBorder="false" class="easyinput" :placeholder="$t('register.usernamePlaceholder')" v-model="formData.username" trim="both" />
			</uni-forms-item>
			<uni-forms-item name="nickname">
				<uni-easyinput :inputBorder="false" class="easyinput" :placeholder="$t('register.nicknamePlaceholder')" v-model="formData.nickname" trim="both"  />
			</uni-forms-item>
			<uni-forms-item name="password" v-model="formData.password" >
				<uni-easyinput :inputBorder="false" class="easyinput" :placeholder="$t('register.passwordDigitsPlaceholder')" type="password" v-model="formData.password" trim="both" />
			</uni-forms-item>
			<uni-forms-item name="pwd2" v-model="formData.pwd2" >
				<uni-easyinput :inputBorder="false" class="easyinput" :placeholder="$t('register.passwordAgain')" type="password" v-model="formData.pwd2" trim="both" />
			</uni-forms-item>
			<uni-forms-item name="captcha">
				<uni-captcha scene="register" v-model="formData.captcha"></uni-captcha>
			</uni-forms-item>
			<uni-easyinput clearable focus type="text" class="input-box" :inputBorder="false"
				maxlength="30" placeholder="请输入学生邮箱地址"></uni-easyinput>
			<uni-easyinput clearable type="number" class="input-box" :inputBorder="false"  maxlength="6"
				placeholder="请输入验证码">
				<template v-slot:right>
					<uni-send-sms-code ref="shortCode" code-type="bind" ></uni-send-sms-code>
				</template>
			</uni-easyinput>
			<uni-agreements @setAgree="agree = $event"></uni-agreements>
			<button class="send-btn" type="primary" @click="submit">{{$t('register.registerAndLogin')}}</button>
		</uni-forms>
	</view>
</template>

<script>
import rules from './validator.js';
import mixin from '../common/login-page.mixin.js';
	export default {
		mixins:[mixin],
		data() {
			return {
				formData: {
					"username": "",
					"nickname": "",
					"password":"",
					"pwd2":"",
					"captcha":false
				},
				rules,
				agree:false
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('register.navigationBarTitle')
			})
		},
		methods: {
			/**
			 * 触发表单提交
			 */
			submit() {
				if(!this.agree){
					return uni.showToast({
						title: this.$t('common').noAgree,
						icon: 'none'
					});
				}
				uni.showLoading({
					mask: true
				})
				this.$refs.form.validate().then((res) => {
						this.submitForm(res)
					}).catch((errors) => {
						console.log(errors);
					})
					.finally(() => {
						uni.hideLoading()
					})
			},
			submitForm(params) {
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'register',
						params,
					},
					success: ({result}) => {
						console.log(result);
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

<style lang="scss" scoped>
	@import url("../common/login-page.css");
	.uni-container {
		padding: 15px;
	}
	.send-btn{
		margin-top: 15px;
	}
	.uni-container ::v-deep .uni-forms-item__label{
		width: 15px !important;
	}
</style>
