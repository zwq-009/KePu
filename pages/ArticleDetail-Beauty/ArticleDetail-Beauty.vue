<template>
	<view class="Box">
		<view class="box">
			<view class="title">{{ detail.title }}</view>
			<view class="channel">
				<image class="channel_img" :src="detail.channel.channel_img" mode="widthFix"></image>
				<view class="text">
					<text class="channel_name">{{ detail.channel.name }}</text>
					<text class="data">2019-12-18</text>
				</view>
			</view>
			<view class="content">
				<!-- #ifdef H5 -->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<rich-text :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
			</view>
			<!-- 底部 -->
			<view class="bottom">
				<view class="interact">
					<!-- 点赞按钮 -->
					<view class="zan">
						<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
						<text class="num2">{{ detail.play_num }}</text>
						<uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
						<text class="num1">{{ detail.praise_num }}</text>
					</view>
					<!-- 转发 -->
					<view class="share" @click="open">
						<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
						<text>分享</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<uni-popup ref="sharepopup" type="bottom"><share-btn :sharedataTemp="sharedata"></share-btn></uni-popup>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
import { formatRichText } from '@/utils/format.js';
import parse from '@/utils/htmlparser.js';
export default {
	data() {
		return {
			sharedata: '',
			detail: {},
			id: '',
			content: [],
			htmlNodes: []
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getArticleDetail();
		this.getDetailContent();
	},
	methods: {
		async getArticleDetail() {
			const res = await myRequestGet('/api/v1/fatiao/article/detail?id=	' + this.id);
			// console.log(res);
			this.detail = res;
		},
		//解析content数据
		async getDetailContent() {
			const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id);
			this.content = formatRichText(res.info.content);
			//#ifdef MP-ALIPAY
			//支付宝小程序rich - text不支持字符串， 需要是nodes数组
			this.htmlNodes = parse(this.content);
			//#endif
		},
		open: function() {
			this.$refs.sharepopup.open();
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ecf0f1;
	.Box {
		width: 100%;
		height: auto;
		margin: 0;
		padding: 0;
		padding-top: 40rpx;
		border-top: 2rpx solid #ecf0f1;
		background-color: #fff;
		.box {
			margin-left: 25rpx;
			margin-right: 25rpx;
			width: auto;
			.title {
				font-size: 40rpx;
			}
			.channel {
				height: 40rpx;
				margin-top: 18rpx;
				position: relative;
				.channel_img {
					display: inline-block;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
				}
				.text {
					display: inline-block;
					position: absolute;
					top: -5rpx;
					.channel_name {
						display: inline-block;
						font-size: 22rpx;
						margin-left: 20rpx;
					}
					.data {
						font-size: 22rpx;
						margin-left: 20rpx;
						color: #b2bec3;
					}
				}
			}
			.content {
				margin-top: 30rpx;
				width: 100%;
				line-height: 2em;
			}
			.bottom {
				margin-top: 35rpx;
				border-top: 1px solid #ecf0f1;
				padding-top: 22rpx;
				padding-bottom: 22rpx;
				.interact {
					.zan {
						display: inline-block;
						color: #a4b0be;
						font-size: 26rpx;
						.num1 {
							margin-left: 10rpx;
							font-weight: 400;
						}
						.num2 {
							margin-left: 10rpx;
							margin-right: 12rpx;
							font-weight: 400;
						}
					}
					.share {
						float: right;
						margin-left: 10rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #747d8c;
					}
				}
			}
		}
	}
}
</style>
