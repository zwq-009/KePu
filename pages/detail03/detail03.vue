<template>
	<view>
		<view class="ft1">{{xq.title}}</view>
		<view class="box1">
			<image :src="xq.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xq.channel.name}}</text>
		</view>
		<!-- #infed H5 -->
		<view class="wb">
			<rich-text :nodes="content"></rich-text>
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
				xq: [],
				content: ""
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			//console.log(this.id)
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				//console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.xq = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
		}
	}
</script>

<style lang="scss">
	.ft1 {
		font-size: 46rpx;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}

	.box1 {
		position: relative;

		image {
			width: 50rpx;
			position: absolute;
			left: 30rpx;
			top: 15rpx;
			border-radius: 50%;
		}

		.t1 {
			font-size: 14px;
			position: absolute;
			top: 20rpx;
			left: 90rpx;
		}
	}
	.wb{
		margin-top: 70rpx;
		font-size: 16px;
		font-weight: 600;
		margin-left: 30rpx;
		margin-right: 30rpx;
		line-height: 70rpx;
	}

</style>
