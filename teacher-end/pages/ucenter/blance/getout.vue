<template>
	<view class="withdraw">
		<view class="withdraw-head">
			<view class="withdraw-head-to">到账渠道</view>
			<view class="withdraw-head-way">
				<view class="withdraw-head-way-1">
					<image class="way-icon" src="/static/images/money.png"></image>
					<text class="way-text">微信零钱</text>
				</view>
				<view class="withdraw-head-way-2">仅支持整数，72小时内到账</view>
			</view>
		</view>
		<view class="withdraw-body">
			<text>提现金额</text>
			<view class="input-money">
				<text class="rmb">￥</text>
				<input v-model.number="extract" type="text" @focus.prevent="stopKeyborad" class="t-input" />
			</view>
			<view class="info-money">
				<view v-if="is_out">
					<text class="info-money-num" style="color: #ff1e0f;">输入金额超过可提现余额，账户余额{{ pool }}元</text>
				</view>
				<view v-else-if="is_lowest">
					<text class="info-money-num" style="color: #ff1e0f;">最低{{ lowest }}元起提现，账户余额{{ pool }}元</text>
				</view>
				<view v-else>
					<text class="info-money-num">当前可提现余额{{ pool }}元，</text>
					<text class="info-money-all" @click="getAll">全部提现</text>
				</view>
			</view>
			<view :class="'tx' + (is_post ? '-active' : '')"><button @click="handleShowModel">提现</button></view>
		</view>

		<view :class="['keyboard', keyboradShow ? '' : 'active', isIphoneX ? 'isIphone' : '']" >
			<block v-for="(item, index) in 9" :key="index">
				<view class="keyboard-item" @tap="keyboradKey(index + 1)">{{ index + 1 }}</view>
			</block>
			<view class="keyboard-item hide"></view>
			<view class="keyboard-item" @tap="keyboradKey(0)"><text>0</text></view>
			<view class="keyboard-item delte" @tap="keyboradDel()"><image class="img" src="/static/images/del.png" mode="aspectFill" :lazy-load="true"></image></view>
		</view>

		<view class="cu-modal" v-if="showModal">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end"><view class="content">提现确认</view></view>
				<view class="padding-xl" style="text-align: left;">
					<view>
						<text>提现金额：</text>
						<text class="text-red fee">
							{{ money }}
							<em>元</em>
						</text>
					</view>
					<view class="margin-top-sm">
						<text>实际到账：</text>
						<text class="text-red fee">
							{{ real_money }}
							<em>元</em>
						</text>
					</view>
					<view class="margin-top-sm">
						<text>服务费：</text>
						<text class="text-red fee">
							{{ service_fee }}
							<em>元</em>
						</text>
					</view>
					<view class="margin-top-sm">
						<text>服务费率：</text>
						<text class="text-red">{{ fee }}%</text>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn margin-left" @tap="showModal = false">我再想想</button>
						<button class="cu-btn bg-green margin-left" @tap="getMoney">确认提现</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pool: 0,
			extract: '',
			service_fee: 0.0,
			showModal: false,
			is_out: false,
			is_lowest: false,
			is_post: false,
			lowest: 0,
			fee: 0,
			money: '',
			real_money: '',
			keyboradShow: false,
			isIphoneX: false,
			isRefuse: false
		};
	},
	watch: {
		extract(oldVal, newVal) {}
	},
	onLoad() {
		this.$api.loading(true);
		this.loadData();
		setTimeout(() => {
			this.$api.loading(false);
		}, 500);
	},
	methods: {
		async loadData() {
			const res = await this.$api.json('pool');
			this.lowest = res.least_money;
			this.fee = res.fee;
			this.pool = res.pool;
			this.$nextTick(() => {
				this.keyboradShow = true;
			});
		},
		stopKeyborad() {
			uni.hideKeyboard();
		},
		keyboradKey(key) {
			this.extract = this.extract * 10 + key;
			this.checkMoney();
		},
		keyboradDel() {
			if (this.extract && this.extract > 0) {
				let val = parseInt(this.extract / 10);
				if (val == 0) val = '';
				this.extract = val;
				this.checkMoney();
			}
		},
		getAll() {
			this.extract = parseInt(this.pool);
			this.checkMoney();
		},
		checkMoney() {
			if (!this.extract || this.extract < this.lowest) {
				this.is_lowest = true;
				this.is_post = false;
			} else if (this.extract > this.pool) {
				this.is_out = true;
				this.is_lowest = false;
				this.is_post = false;
			} else {
				this.is_out = false;
				this.is_lowest = false;
				this.is_post = true;
			}
			if (parseFloat(this.extract).toString() == 'NaN') {
				this.is_post = false;
				this.$api.msg('输入金额不合法');
			}
		},
		handleShowModel() {
			if (this.isRefuse) return;
			this.checkMoney();
			if (!this.is_post) return;
			this.money = this.extract;
			this.service_fee = Number((this.extract * (this.fee / 100)).toString().match(/^\d+(?:\.\d{0,2})?/));
			this.real_money = Number((this.extract - this.service_fee).toString().match(/^\d+(?:\.\d{0,2})?/));
			this.showModal = true;
		},
		getMoney() {
			this.showModal = false;
			if (this.isRefuse) return;
			this.isRefuse = true;
			setTimeout(() => {
				this.$api.msg('提现申请已提交，等待管理员处理');
			}, 500);
			setTimeout(() => {
				uni.navigateBack();
			}, 1000);
		}
	},
	onPullDownRefresh() {
		this.extract = '';
		this.loadData();
		this.is_out = false;
		this.is_lowest = false;
		this.is_post = false;
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 500);
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ededed;
}
.withdraw {
	padding: 20px;
	&-head {
		background-color: #f7f7f7;
		display: flex;
		align-content: center;
		padding: 20px 30px;
		font-size: 14px;
		&-to {
		}
		&-way {
			display: flex;
			flex-direction: column;
			align-content: center;
			margin-left: 20px;
			&-1 {
				color: #576b95;
				margin-bottom: 10px;
				.way-icon {
					width: 16px;
					height: 16px;
					margin-right: 5px;
					top: 2px;
				}
			}
			&-2 {
				color: #acacac;
				font-size: 12px;
			}
		}
	}
	&-body {
		background-color: #fff;
		padding: 20px 30px;
		font-size: 14px;
		.input-money {
			display: flex;
			align-content: center;
			font-weight: 600;
			border-bottom: 0.5px solid #eaeef1;
			.rmb {
				font-size: 2em;
				top: 10px;
				position: relative;
			}
			.t-input {
				height: 1.9em;
				font-size: 2.5em;
				border: none;
				position: relative;
				left: 3.5%;
				outline: none;
			}
		}
		.info-money {
			margin-top: 10px;
			font-size: 12px;
			margin-bottom: 20px;
			&-num {
				color: #b2b2b2;
			}
			&-all {
				color: #576b95;
			}
		}
		.tx {
			button {
				color: #b2b2b2;
			}
		}
		.tx-active {
			button {
				color: #fff;
				background: #07c160;
			}
		}
	}
	.keyboard {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #ebebeb;
		display: flex;
		justify-content: center;
		z-index: 2;
		flex-wrap: wrap;
		transition: all 0.2s ease-in 0.2s;
	}
	.active {
		bottom: -400rpx;
	}
	.keyboard-item {
		box-sizing: border-box;
		width: 250rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		font-size: 40rpx;
		color: #333;
		height: 99rpx;
		border: 1rpx solid #ebebeb;
		border-top: none;
		border-left: none;
	}
	.hide {
		opacity: 0;
	}
	.delte {
		background: none;
		box-shadow: none;
	}
	.delte image {
		width: 60rpx;
		height: 60rpx;
	}
	.isIphone {
		padding-bottom: 68rpx !important;
	}
	.fee {
		em {
			font-size: 0.5rem;
			font-style: normal;
		}
	}
}

</style>
