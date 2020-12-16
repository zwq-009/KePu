<template>
	<view class="a">
		<!-- 文本内容 -->
		<view class="b">{{fat.title}}</view>
		<view class="c">
			<image :src="fat.channel.channel_img" mode="widthFix"></image>
		</view>
		<text class="d">
			{{fat.channel.name}}
		</text>
		<text class="e">2020-12-15</text>
		<view class="f">
			<!-- #ifdef H5 -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
		</view>
		<!-- 我是有底线的 -->
		<view class="g"></view>
		<view class="h">
			<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2">
			</uni-icons>
			{{fat.play_num}}
			<view class="i">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2">
				</uni-icons>
				{{fat.praise_num}}
			</view>
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
				fat: [],
				content: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			console.log(this.id)
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.fat = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				// console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
		}
	}
</script>

<style lang="scss" scoped>
	.a {
		position: relative;
		margin: 30rpx;

		.b {
			font-size: 40rpx;
			color: #333333;
			font-weight: 600;
			margin-bottom: 20rpx;
		}

		.c {
			image {
				width: 50rpx;
			}
		}

		.d {
			font-size: 26rpx;
			position: absolute;
			top: 82rpx;
			left: 64rpx;
		}

		.e {
			position: absolute;
			top: 82rpx;
			left: 220rpx;
			font-size: 26rpx;
			color: #bbbbbb;
		}

		.f {
			line-height: 60rpx;
			font-size: 32rpx;
			color: #333333;
		}

		.g {
			border: 1rpx solid #ecf0f1;
			position: relative;
			top: 40rpx;
		}

		.h {
			position: relative;
			top: 100rpx;
			font-size: 16rpx;
			color: #777777;
			left: 20rpx;
			

			.i {
				position: absolute;
				top: 0rpx;
				left: 100rpx;
			}
		}
	}
</style>
