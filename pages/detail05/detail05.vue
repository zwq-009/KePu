<template>
	<view class="Box">
		<view class="box">
			<view class="title">{{ detail.title }}</view>
			<view class="channel">
				<image class="channel_img" :src="detail.channel.channel_img" mode=""></image>
				<text class="channel_name">{{detail.channel.name}} </text>
				<text class="data">2019-12-18</text>
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
		</view>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
import { formatRichText } from '@/utils/format.js';
import parse from '@/utils/htmlparser.js';
export default {
	data() {
		return {
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
			console.log(res);
			//#ifdef MP-ALIPAY
			this.htmlNodes = parse(this.ArticleDetail.content);
			//#endif
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
		}
	}
};
</script>

<style lang="scss">
.Box {
	width: 100%;
	height: 2000rpx;
	margin: 0;
	padding: 0;
	padding-top: 40rpx;
	border-top: 2rpx solid #ecf0f1;
	.box {
		margin-left: 25rpx;
		margin-right: 25rpx;
		width: auto;
		.title {
			font-size: 40rpx;
		}
		.channel {
			height: 40rpx;
			.channel_img {
				display: inline-block;
				width: 40rpx;
				height: 40rpx;
				border-radius: 50%;
			}
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
		.content {
			margin-top: 40rpx;
		}
	}
}
</style>
