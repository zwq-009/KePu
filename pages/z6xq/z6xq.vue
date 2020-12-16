<template>
	<view>
		<view class="v1">{{xqsj.title}}</view>
		<view class="v2">
			<image :src="xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="c1">
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
		<view class="dx"></view>
		<view>
			
		</view>
	</view>

</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				xqsj: {},
				content: [],
				htmlNodes: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				// console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				// console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dx{
		border: 1px solid #BCBEC2;
		background-color: #BCBEC2;
		width: 95%;
		margin: 0 auto;
	}
	.v1 {
		font-size: 20px;
		margin-left: 20rpx;
	}

	.c1 {
		width: 90%;
		margin: 70rpx auto 0rpx auto;
		line-height: 2rem;
	}

	.v2 {
		position: relative;

		image {
			width: 50rpx;
			position: absolute;
			top: 10rpx;
			left: 15rpx;
		}

		.t1 {
			font-size: 13px;
			position: absolute;
			top: 20rpx;
			left: 80rpx;
		}

		.t2 {
			font-size: 13px;
			position: absolute;
			top: 20rpx;
			left: 190rpx;
			color: #C0C4CC;
		}
	}


	// .li {
	// 	border: 1px solid #f4f4f4;
	// 	width: 90%;
	// 	margin: 0 auto;
	// }
</style>
