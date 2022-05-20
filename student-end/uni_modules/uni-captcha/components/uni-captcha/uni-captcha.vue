<template>
	<view class="captcha-box">
		<view class="captcha-img-box">
			<uni-icons class="loding" size="20px" color="#BBB" v-if="loging" type="spinner-cycle"></uni-icons>
			<image class="captcha-img" :class="{opacity:loging}" @click="getImageCaptcha" :src="captchaBase64"
				mode="widthFix"></image>
		</view>
		<input @blur="focusCaptchaInput = false" :focus="focusCaptchaInput" type="text" class="captcha"
			:inputBorder="false" maxlength="4" v-model="modelValue" placeholder="请输入验证码">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				focusCaptchaInput: false,
				modelValue: "",
				captchaBase64: "",
				loging: false
			};
		},
		model: {
			prop: 'modelValue',
			event: 'update:modelValue'
		},
		props: {
			event: 'update:modelValue',
			scene: {
				type: String,
				default () {
					return ""
				}
			},
			focus: {
				type: Boolean,
				default () {
					return false
				}
			}
		},
		watch: {
			modelValue(value) {
				// TODO 兼容 vue2
				this.$emit('input', value);
				// TODO　兼容　vue3
				this.$emit('update:modelValue', value)
			},
			scene: {
				handler(scene) {
					if (scene) {
						this.getImageCaptcha(false)
					} else {
						uni.showToast({
							title: 'scene不能为空',
							icon: 'none'
						});
					}
				},
				immediate:true
			}
		},
		methods: {
			getImageCaptcha(focus = true) {
				this.loging = true
				this.modelValue = ''
				if (focus) {
					this.focusCaptchaInput = true
				}
				const uniIdCo = uniCloud.importObject("uni-captcha-co", {
					customUI: true
				})
				uniIdCo.getImageCaptcha({
						scene: this.scene
					}).then(result => {
						console.log(result);
						this.captchaBase64 = result.captchaBase64
					})
					.catch(e => {
						uni.showToast({
							title: e.message,
							icon: 'none'
						});
					}).finally(e => {
						this.loging = false
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.captcha-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
	}

	.captcha-img-box,
	.captcha {
		height: 44px;
		line-height: 44px;
	}

	.captcha-img-box {
		cursor: pointer;
		position: relative;
		background-color: #FEFAE7;
	}

	.captcha {
		background-color: #F8F8F8;
		font-size: 14px;
		flex: 1;
		padding: 0 20rpx;
		margin-left: 20rpx;
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
	}

	.captcha-img-box,
	.captcha-img,
	.loding {
		width: 100px;
	}

	.loding {
		z-index: 9;
		color: #bbb;
		position: absolute;
		text-align: center;
		line-height: 45px;
		animation: rotate 1s linear infinite;
	}

	.opacity {
		opacity: 0.5;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}

		to {
			transform: rotate(360deg)
		}
	}
</style>
