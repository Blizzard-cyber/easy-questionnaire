<template>
	<view class="box">
		<!-- 登录框 (选择手机号所属国家和地区需要另行实现) -->
		<uni-easyinput clearable focus type="number" class="input-box" :inputBorder="false" v-model="formData.phone"
			maxlength="11" :placeholder="$t('common.phonePlaceholder')"></uni-easyinput>
		<uni-easyinput clearable type="number" class="input-box" :inputBorder="false" v-model="formData.code" maxlength="6"
			:placeholder="$t('common.verifyCodePlaceholder')">
			<template v-slot:right>
				<uni-send-sms-code ref="shortCode" code-type="bind" :phone="formData.phone"></uni-send-sms-code>
			</template>
		</uni-easyinput>
		<button class="send-btn-box" :disabled="!canSubmit" :type="canSubmit?'primary':'default'" @click="submit">{{$t('common.submit')}}</button>
	</view>
</template>
<script>
	import {
		mapMutations,
		mapGetters
	} from 'vuex';
	export default {
		data() {
			return {
				currenPhoneArea: '',
				formData: {
					phone:"",
					code:""
				}
			}
		},
		computed: {
			tipText() {
				return this.$t('common.verifyCodeSend')+ `${this.currenPhoneArea} ${this.formData.phone}。` + this.$t('common.passwordDigits')
			},
			canSubmit() {
				return this.isPhone() && this.isCode();
			}
		},
		onLoad(event) {
			uni.setNavigationBarTitle({
				title:this.$t('bindMobile.navigationBarTitle')
			})
		},
		onReady() {
		},
		methods: {
			...mapMutations({
				setUserInfo: 'user/login'
			}),
			/**
			 * 完成并提交
			 */
			submit() {
				console.log(this.formData);
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'bindMobileBySms',
						params:{
							"mobile": this.formData.phone,
							"code": this.formData.code
						},
					},
					success: ({result}) => {
						console.log(result);
						this.setUserInfo({"mobile":result.mobile})
						uni.showToast({
							title: result.msg||'完成',
							icon: 'none'
						});
						if (result.code === 0) {
							uni.navigateBack()
						}
					}
				})
			},
			isPhone() {
				let reg_phone = /^1\d{10}$/;
				let isPhone = reg_phone.test(this.formData.phone);
				return isPhone;
			},
			isCode() {
				let reg_code = /^\d{6}$/;
				let isCode = reg_code.test(this.formData.code);
				return isCode;
			}
		}
	}
</script>

<style>
	.box {
		align-items: center;
		justify-content: center;
		padding: 50rpx;
		padding-top: 10px;
	}
/* #ifndef APP-NVUE  || VUE3 */
	.box /deep/ .uni-easyinput__content {
		height: 50px;
	}
/* #endif */
	.input-box {
		width: 100%;
		margin-top: 16px;
		background-color: #f9f9f9;
		border-radius: 6rpx;
		flex-direction: row;
		flex-wrap: nowrap;
	}

	.send-btn-box {
		width: 650rpx;
		margin-top: 15px;
	}
</style>
