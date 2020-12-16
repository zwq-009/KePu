<template>
	<view class="v1">
		<view class="v2">
			<video :src="xq.info.video_url" object-fit="cover"></video>
		</view>
		<text>{{xq.title}}</text>
		<view class="v3">
			<image :src="xq.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xq.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="v4">
			{{xq.info.video_note}}
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	export default {
		data() {
			return {
				id: "",
				xq: {}
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
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xq = res
			},
		}
	}
</script>


<style lang="scss">
	.v1 {
		.v4{
			position: absolute;
			top: 600rpx;
			left: 20rpx;
			font-size: 20px;
			line-height: 70rpx;
			text-indent: 2em;
			width: 95%;
			font-weight: 700;
		}
		.v3 {
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
			font-size: 25px;
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
