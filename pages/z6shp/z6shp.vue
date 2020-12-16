<template>
	<view class="v1">
		<view class="v2">
			<video :src="xqsj.info.video_url" object-fit="cover"></video>
		</view>
		<text>{{xqsj.title}}</text>
		<view class="v3">
			<image :src="xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="v4">
			{{xqsj.info.video_note}}
		</view>
		<view class="li"></view>
		<view class="bottom-item"  @click="clickPraise(detailInfo.IS_PRAISE)">
			<view class="iconfont praised bottom-item-image" style="color:yellow" v-if="detailInfo.IS_PRAISE == '1'"></view>
			<view class="iconfont praise bottom-item-image" v-else></view>
			<text class="bottom-item-text">{{detailInfo.PRAISE_NUM}}</text>
		</view>
		<view class="fx" @click="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>
		<view>
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import data from '@/data';
	import dateUtils from '@/common/utils/dateUtils.js';
	export default {
		data() {
			return {
				id: "",
				xqsj: {},
				sharedata: '',
				detailInfo: {},
			}
		},

		onShow: function() {
			this.getData(); //获取数据

		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xqsj = res
			},
			open: function() {
				this.$refs.sharepopup.open();
			},
			getData() {
				this.detailInfo = data.dataInfo;
			},
			clickPraise(isPraise) {
				let praiseParam = '1';
				let praiseNum = parseInt(this.detailInfo.PRAISE_NUM);
				switch (isPraise) {
					case '0':
						praiseParam = '1';
						praiseNum++;
						break;
					case '1':
						praiseParam = '0';
						praiseNum--;
						break;
				}
				this.detailInfo.IS_PRAISE = praiseParam;
				this.detailInfo.PRAISE_NUM = praiseNum--;
			},
		},
		
	}
</script>


<style lang="scss">
	@import '../../common/css/iconfont.css';

	.v1 {
				.bottom-item {
					height: 80rpx;
					position: absolute;
					bottom: -30rpx;
					left: 30rpx;
					text{
						position: absolute;
						bottom: 28rpx;
						left: 20rpx;
						font-weight: 100;
						font-size: 40rpx;
					}
					.bottom-item-image {
						font-size: 40rpx;
						color: $uni-text-color;
					}
				}

		.li {
			position: absolute;
			bottom: 70rpx;
			left: 20rpx;
			width: 90%;
			border: 1px solid #DCDFE6;
			background-color: #DCDFE6;
		}

		.fx {
			margin-top: 670rpx;
			margin-left: 560rpx;

			text {
				font-size: 40rpx;
				font-weight: 100;
				margin-left: 4rpx;
			}
		}

		position: relative;

		.v4 {
			position: absolute;
			top: 600rpx;
			left: 20rpx;
			font-size: 40rpx;
			line-height: 70rpx;
			text-indent: 2em;
			width: 95%;
			font-weight: 100;
		}

		.v3 {
			position: relative;

			image {
				width: 70rpx;
				position: absolute;
				left: 25rpx;
			}

			.t1 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				top: 20rpx;
				left: 85rpx;
			}

			.t2 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				left: 215rpx;
				top: 22rpx;
				color: #BCBEC2;
			}
		}

		// width: 100%;
		// height: 500px;
		text {
			font-size: 50rpx;
			font-weight: 900;
			margin-left: 30rpx;
		}

		.v2 {
			width: 100%;
			height: 400rpx;
			margin-bottom: 30rpx;

			video {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
