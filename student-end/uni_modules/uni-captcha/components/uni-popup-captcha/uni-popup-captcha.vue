<template>
	<uni-popup ref="popup" type="center">
		<view class="popup-captcha">
			<view class="content">
				<text class="title">{{title}}</text>
				<uni-captcha :scene="scene" v-model="modelValue"></uni-captcha>
			</view>
			<view class="button-box">
				<view @click="close" class="btn">取消</view>
				<view @click="confirm" class="btn confirm">确认</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		data() {
			return {
				modelValue: "",
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
			title: {
				type: String,
				default () {
					return ""
				}
			},
		},
		watch: {
			modelValue(value) {
				// TODO 兼容 vue2
				this.$emit('input', value);
				// TODO　兼容　vue3
				this.$emit('update:modelValue', value)
			}
		},
		methods: {
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			},
			confirm() {
				if(this.modelValue.length < 4){
					return uni.showToast({
						title: '请填写验证码',
						icon: 'none'
					});
				}
				this.close()
				this.$emit('confirm')
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		flex-direction: column;
	}

	/* #endif */
	.popup-captcha {
		/* #ifndef APP-NVUE */
		display: flex;
		max-width: 600px;
		/* #endif */
		width: 600rpx;
		padding-bottom: 0;
		background-color: #FFF;
		border-radius: 10px;
		flex-direction: column;
		position: relative;
	}

	.popup-captcha .content {
		padding: 1.3em 0.8em;
	}

	.popup-captcha .title {
		text-align: center;
		word-wrap: break-word;
		word-break: break-all;
		white-space: pre-wrap;
		font-weight: 400;
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #111;
		margin-bottom: 15px;
	}

	.button-box {
		height: 44px;
		border-top: solid 1px #eee;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.button-box ,.btn{
		height: 44px;
		line-height: 44px;
	}
	.button-box .btn{
		flex: 1;
		margin: 1px;
		text-align: center;
	}
	.button-box .confirm{
		color: #007aff;
		border-left: solid 1px #eee;
	}
</style>
