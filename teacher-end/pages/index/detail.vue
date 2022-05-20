<template>
	<view class="container">
		
		<diy-navbar bgColor="green" :isBack="true">
			<!-- #ifndef VUE3 -->
			<block slot="content"> 详情页 </block>
			<!-- #endif -->
			<!-- #ifdef VUE3 -->
			<template v-slot:content> 详情页 </template>
			<!-- #endif -->
		</diy-navbar>
		<view class="flex diygw-col-24 flex-direction-column steps-clz">
			<scroll-view scroll-x :scroll-into-view="'scroll-' + stepsIndex" scroll-with-animation>
				<view class="diygw-steps steps-numbers steps-arrow">
					<view :id="'scroll-' + index" class="diygw-step-item" :class="[index > stepsIndex ? '' : item.textClazz]" v-for="(item, index) in stepsDatas" :key="index">
						<text class="num" :data-index="index + 1" :class="[index > stepsIndex ? item.icon : item.successIcon]"></text>
						<text>
							{{ item.text }}
						</text>
					</view>
				</view>
			</scroll-view>
			<view class="flex justify-end"> </view>
		</view>
		<view class="flex diygw-col-24 grid1-clz">
			<view class="diygw-grid col-4 diygw-card diygw-shadow">
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner diygw-card diygw-shadow">
						<view class="diygw-grid-icon diygw-avatar radius-md diy-icon-commentfill"> </view>
						<view class="diygw-grid-title"> 私聊 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner diygw-card diygw-shadow">
						<view class="diygw-grid-icon diygw-avatar radius-md diy-icon-appreciatefill"> </view>
						<view class="diygw-grid-title"> 点赞 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner diygw-card diygw-shadow">
						<view class="diygw-grid-icon diygw-avatar radius-md diy-icon-starfill"> </view>
						<view class="diygw-grid-title"> 收藏 </view>
					</view>
				</view>
				<view class="diygw-grid-item">
					<view class="diygw-grid-inner diygw-card diygw-shadow">
						<view class="diygw-grid-icon diygw-avatar radius-md diy-icon-lightfill"> </view>
						<view class="diygw-grid-title"> 协助 </view>
					</view>
				</view>
			</view>
		</view>
		<view class="diygw-col-24 text-clz"> 经济飞速发展的背景下对娱乐圈偷税漏税的调查问卷 </view>
		<view class="flex diygw-col-24">
			<view class="diygw-list small">
				<view style="color: #8c6974" class="diygw-item col-100 row solid-bottom solid-small-bottom list3-item-clz">
					<view class="diygw-avatar radius-md">
						<image mode="aspectFit" class="diygw-avatar-img radius-md" src="/static/icon12_nz.png"></image>
					</view>
					<view class="content">
						<view class="title"> 张三 </view>
						<view style="color: #263d8e" class="text-sm remark"> 3天前 </view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex-clz">
			<view class="diygw-col-24 text1-clz diygw-text-lg text-red"> 问卷描述 </view>
			<view class="diygw-col-24 text2-clz diygw-text-md"> 9月18日，国家税务总局办公厅发布通知，要求进一步加强文娱领域从业人员税收管理，明确“对存在涉税风险的明星艺人、网络主播进行一对一风险提示和督促整改，对2021年底前能够主动报告并及时纠正涉税问题的，可以依法从轻、减轻或者免予处罚；对税务机关调查核实和督促整改工作拒不配合的，要依法责令限改，并提请行业主管部门和行业协会协助督促纠正；情节严重的，要严肃依法查处”。这就是实打实的硬措施，就是要让别有用心者无机可乘。 </view>
			<image src="/static/162781081777.jpeg" class="response diygw-col-24" mode="widthFix"></image>
			<view class="flex diygw-col-24">
				<view class="diygw-pzx" style="border-bottom: 1px solid #eee"></view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz">
			<view class="diygw-col-24 diygw-text-lg text-red"> 问卷要求 </view>
			<view class="diygw-col-24 diygw-text-md"> 1. 填写学生必须有相关专业背景； </view>
			<view class="diygw-col-24 diygw-text-md"> 2. 问卷填写时间不能少于3分钟； </view>
			<view class="diygw-col-24 diygw-text-md"> 3. 协助者不可看到问卷填写内容； </view>
		</view>
		<view class="flex diygw-col-24 flex-direction-column flex-wrap flex2-clz">
			<view class="diygw-col-24 diygw-text-lg text-red"> 问卷详情 </view>
			<view class="flex diygw-col-24 justify-center">
				<button class="diygw-btn line-blue radius diygw-shadow flex1 margin-lg button-button-clz">点击此处查看问卷详情</button>
			</view>
		</view>
		<view class="version text-grey flex-direction-column flex diygw-col-24 justify-center align-center">
			<view> DIY官网提供技术支持 </view>
			<view> http://www.diygw.com </view>
		</view>
		<view class="clearfix"></view>
	</view>
</template>

<script>
	//create by: 邓志锋 <280160522@qq.com> <https://www.diygw.com> DIYGW可视化设计一键生成源码
	export default {
		data() {
			return {
				stepsDatas: [
					{ text: `查看问卷内容`, icon: '', successIcon: 'diy-icon-usefullfill', textClazz: 'text-green' },
					{ text: `选择协助`, icon: '', successIcon: 'diy-icon-emoji', textClazz: 'text-green' },
					{ text: `完成协助`, icon: '', successIcon: 'diy-icon-close', textClazz: 'text-green' },
					{ text: `积分到账`, icon: '', successIcon: 'diy-icon-check', textClazz: 'text-green' }
				],
				stepsIndex: 0
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
			changeSteps(evt) {
				let { type } = evt.currentTarget.dataset;
				if (type == 'prev') {
					if (this.stepsIndex > -1) {
						this.stepsIndex = this.stepsIndex - 1;
					} else {
						this.showToast('已经是初始位置', 'none');
					}
				} else {
					if (this.stepsIndex < this.stepsDatas.length - 1) {
						this.stepsIndex = this.stepsIndex + 1;
					} else {
						this.showToast('已经是最后一个', 'none');
					}
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "common/diygw-ui/iconfont.scss";
	
	@import "common/diygw-ui/index.scss";
	.countdown1-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		font-size: 20px;
		font-family: 雅黑;
		margin-top: 10px;
		margin-bottom: 10px;
		text-align: center;
		margin-right: 5px;
	}
	.steps-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 30px;
		margin-right: 5px;
	}
	.grid1-clz {
		background-color: rgba(255, 255, 255, 1);
		margin-left: 10px;
		border-bottom-left-radius: 20px;
		box-shadow: 0px 1px 3px rgba(31, 31, 31, 0.16);
		overflow: hidden;
		width: calc(100% - 10px - 10px) !important;
		border-top-left-radius: 20px;
		margin-top: 10px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		margin-bottom: 50px;
		margin-right: 10px;
	}
	.grid1-item-clz {
		font-size: 12px;
	}
	.grid1-icon-clz {
		width: 50px;
		height: 50px;
		font-size: calc(50px - 4px) !important;
	}
	.text-clz {
		color: #000000;
		font-size: 22px;
		font-family: 楷体;
		text-align: center;
	}
	.flex-clz {
		margin-left: 5px;
		z-index: 100;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 20px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.text1-clz {
		border: 1px solid #eee;
		font-size: 13px;
		font-family: 雅黑;
	}
	.text2-clz {
		border: 1px solid #eee;
		font-size: 15px;
		font-family: 楷体;
		text-align: left;
	}
	.flex1-clz {
		margin-left: 5px;
		z-index: 100;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 20px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.flex2-clz {
		margin-left: 5px;
		z-index: 100;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 20px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.button-button-clz {
		margin: 3px !important;
	}
	.container {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 12px;
	}
	.container {
		padding-bottom: 80px;
	}
</style>
