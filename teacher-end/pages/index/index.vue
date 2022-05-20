<template>
	<view class="container">
		<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex-clz">
			<view class="diygw-col-19">
				<view class="diygw-search">
					<view class="flex1 flex padding-xs solid radius">
						<text style="color: #555 !important" class="diy-icon-search"></text>
						<input class="flex1" name="search" type="" v-model="search" placeholder="请输入关键字" />
					</view>
				</view>
			</view>
			<view class="flex diygw-col-0">
				<view class="diygw-avatar xs radius bg-none">
					<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon15_yj.png"></image>
					<view class="diygw-tag badge avatar-badge-0 red"> 1 </view>
				</view>
			</view>
			<view class="flex diygw-col-4">
				<view class="diygw-tag margin-xs radius-xs">
					<image class="diygw-tag-img" src="/static/icon11_jf.png"></image>
					<text></text>
				</view>
			</view>
		</view>
		<view class="flex diygw-col-24">
			<uni-notice-bar show-icon scrollable
							text="版本测试中,更多功能正在完善!" />
		</view>
		<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex1-clz">
			<view class="flex diygw-col-20 flex-direction-column">
				<scroll-view scroll-x :scroll-into-view="'scroll-' + tabsIndex" scroll-with-animation class="diygw-tabs text-center justify-start scale-title small-border">
					<view :id="'scroll-' + index" class="diygw-tab-item" :class="index == tabsIndex ? ' cur text-black' : ''" v-for="(item, index) in tabsDatas" :key="index" @click="changeTabs" :data-index="index">
						{{ item.text }}
					</view>
				</scroll-view>
			</view>
			<view class="flex diygw-col-0">
				<view class="diygw-avatar md white radius">
					<text class="diy-icon-sort"></text>
				</view>
			</view>
		</view>
		<view class="diygw-modal basic" :class="modal" style="z-index: 1000">
			<view class="diygw-dialog basis-lg">
				<view class="justify-end diygw-bar">
					<view class="content"> 窗口标题 </view>
					<view class="action" data-type="closemodal" data-id="modal" @tap="navigateTo">
						<i class="diy-icon-close"></i>
					</view>
				</view>
				<view>
					<view class="flex diygw-dialog-content diygw-col-24 modal-clz">
						<view class="flex diygw-col-24">
							<button @tap="navigateTo" data-type="closemodal" data-id="modal" class="diygw-btn green flex1 margin-xs">按钮</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex diygw-col-24 swiper-clz">
			<swiper class="swiper swiper-indicator_rect" indicator-color="rgba(51, 51, 51, 0.39)" indicator-active-color="#fff" indicator-dots="true" autoplay interval="3000" circular="true" style="height: 150px">
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/bz1.jpg" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/bz13.jpg" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/bz2.png" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="flex diygw-col-24">
			<view class="diygw-grid col-5">
				<view @tap="navigateTo" data-type="openmodal" data-id="modal" class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon11_zh.png"></image>
						</view>
						<view class="diygw-grid-title"> 教师 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_kxjs.png"></image>
						</view>
						<view class="diygw-grid-title"> 科学技术 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_zlcg.png"></image>
						</view>
						<view class="diygw-grid-title"> 专利成果 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_rwsk.png"></image>
						</view>
						<view class="diygw-grid-title"> 人文社科 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_nykj.png"></image>
						</view>
						<view class="diygw-grid-title"> 农业科技 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_qy.png"></image>
						</view>
						<view class="diygw-grid-title"> 企业 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_bmgk.png"></image>
						</view>
						<view class="diygw-grid-title"> 营销 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_kjpt.png"></image>
						</view>
						<view class="diygw-grid-title"> 管理 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_kxjs2.png"></image>
						</view>
						<view class="diygw-grid-title"> 产品调研 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner grid-item-clz">
						<view class="diygw-grid-icon diygw-avatar radius">
							<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_zs.png"></image>
						</view>
						<view class="diygw-grid-title"> 日常调研 </view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex diygw-col-24 line-clz">
			<view class="diygw-pzx" style="border-bottom: 1px solid #eee"></view>
		</view>
		<view class="flex diygw-col-24">
			<view class="diygw-pzx" style="border-bottom: 5px solid #eee"></view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex8-clz">
			<view class="flex diygw-col-24">
				<view class="diygw-list">
					<view style="color: #8c6974" class="diygw-item col-100 row arrow solid-bottom solid-small-bottom list3-item-clz">
						<view class="diygw-avatar radius-xs">
							<image mode="aspectFit" class="diygw-avatar-img radius-xs" src="/static/icon12_nz.png"></image>
						</view>
						<view class="content">
							<view class="title"> 张三 </view>
							<view style="color: #263d8e" class="text-sm remark"> 3天前 电子科技大学计算机学院 </view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-list">
					<view style="color: #dd0a4c" class="diygw-item col-100 flex-direction-row-reverse solid-bottom list5-item-clz">
						<view class="diygw-avatar list5-icon-clz">
							<image mode="aspectFit" class="diygw-avatar-img" src="/static/bz4.jpeg"></image>
						</view>
						<view class="content">
							<view class="title"> 经济飞速发展的背景下对娱乐圈偷税漏税的调查问卷 </view>
							<view style="color: #586fc2" class="text-sm remark"> 非常感谢您对我们此次问卷调查工作的支持！回答完调查问卷上题目后，您回答所提供的信息对我们今后工作非常有价值！我们将会把相关信息进行综合分析，希望我们的调查能对您有所帮助！ </view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24 justify-start">
				<view class="diygw-tag margin-xs diygw-capsule">
					<view style="color: #002fff" class="diygw-tag bg-green radius">
						<text class="icon diy-icon-profilefill"></text>
					</view>
					<view class="diygw-tag line-green radius"> 人文社科 </view>
				</view>
				<view class="diygw-tag margin-xs diygw-capsule">
					<view style="color: #002fff" class="diygw-tag bg-red radius">
						<text class="icon diy-icon-peoplefill"></text>
					</view>
					<view class="diygw-tag line-red radius"> 教师 </view>
				</view>
				<view class="diygw-tag margin-xs diygw-capsule">
					<view style="color: #002fff" class="diygw-tag bg-blue radius">
						<text class="icon diy-icon-flashbuyfill"></text>
					</view>
					<view class="diygw-tag line-blue radius"> 日常调研 </view>
				</view>
			</view>
			<view class="flex diygw-col-24 justify-between">
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-share"></text>
					<text> 分享 </text>
				</view>
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-star"></text>
					<text> 13 </text>
				</view>
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-appreciate"></text>
					<text> 692 </text>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-pzx" style="border-bottom: 5px solid #eee"></view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex9-clz">
			<view class="flex diygw-col-24">
				<view class="diygw-list">
					<view style="" class="diygw-item col-100 row solid-bottom solid-small-bottom list4-item-clz">
						<view class="diygw-avatar">
							<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon12_07-01.png"></image>
						</view>
						<view class="content">
							<view class="title"> 零一 </view>
							<view class="text-sm remark"> 3天前 电子科技大学软件学院 </view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-list">
					<view style="" class="diygw-item col-100 flex-direction-row-reverse solid-bottom list7-item-clz">
						<view class="diygw-avatar list7-icon-clz">
							<image mode="aspectFit" class="diygw-avatar-img" src="/static/bz3.jpg"></image>
						</view>
						<view class="content">
							<view class="title"> 使用render函数二次封装el-table </view>
							<view class="text-sm remark"> 实现多选只需要将type属性值设置为selection。同时提供了select，select-all，selection-change等方法。用法和el-table一致。 </view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24 justify-start">
				<view class="diygw-tag margin-xs diygw-capsule">
					<view style="color: #002fff" class="diygw-tag bg-green radius">
						<text class="icon diy-icon-discover"></text>
					</view>
					<view class="diygw-tag line-green radius"> 科学技术 </view>
				</view>
				<view class="diygw-tag margin-xs diygw-capsule">
					<view style="color: #002fff" class="diygw-tag bg-red radius">
						<text class="icon diy-icon-peoplefill"></text>
					</view>
					<view class="diygw-tag line-red radius"> 教师 </view>
				</view>
			</view>
			<view class="flex diygw-col-24 justify-between">
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-share"></text>
					<text> 分享 </text>
				</view>
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-star"></text>
					<text> 5 </text>
				</view>
				<view class="diygw-tag margin-xs md radius">
					<text class="icon diy-icon-appreciate"></text>
					<text> 35 </text>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-pzx" style="border-bottom: 5px solid #eee"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				search: '',
				tabsDatas: [{ text: `关注` }, { text: `广场` }, { text: `热门` }, { text: `排行` }],
				tabsIndex: 0,
				modal: ''
			};
		},
		onShareAppMessage: function () {},
		onLoad(option) {
			this.setCurrentPage(this);
			if (option) {
				this.setData({
					globalOption: option
				});
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			async init() {},
			changeTabs(evt) {
				let { index } = evt.currentTarget.dataset;
				if (index == this.tabsIndex) return;
				this.setData({
					tabsIndex: index
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "common/diygw-ui/iconfont.scss";
	
	@import "common/diygw-ui/index.scss";
	.flex-clz {
		margin-left: 10px;
		z-index: 1000;
		width: calc(100% - 10px - 10px) !important;
		margin-top: 10px;
		margin-bottom: 0px;
		margin-right: 10px;
	}
	.avatar-badge-0 {
		right: -5px;
	}
	.flex1-clz {
		margin-left: 10px;
		z-index: 1000;
		width: calc(100% - 10px - 10px) !important;
		margin-top: 0px;
		margin-bottom: 10px;
		margin-right: 10px;
	}
	.modal-clz {
		z-index: 1000;
	}
	.swiper-clz {
		margin-left: 10px;
		border-bottom-left-radius: 6px;
		overflow: hidden;
		width: calc(100% - 10px - 10px) !important;
		border-top-left-radius: 6px;
		margin-top: 0px;
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
		margin-bottom: 5px;
		margin-right: 10px;
	}
	.line-clz {
		margin-left: 10px;
		width: calc(100% - 10px - 10px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 10px;
	}
	.flex8-clz {
		z-index: 1000;
	}
	.list5-item-clz {
		margin: 0px;
		padding: 10px;
	}
	.list5-item-clz .list5-icon-clz {
		width: 100px;
		height: 100px;
		font-size: calc(100px - 4px) !important;
	}
	.flex9-clz {
		z-index: 1000;
	}
	.list7-item-clz {
		margin: 0px;
		padding: 10px;
	}
	.list7-item-clz .list7-icon-clz {
		width: 100px;
		height: 100px;
		font-size: calc(100px - 4px) !important;
	}
	.container {
		padding-left: 0px;
		padding-right: 0px;
	}
</style>
