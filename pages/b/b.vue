<template>
	<view class="k">
		<!-- 视频 -->
		<video :src="dvd.info.video_url" controls></video>
		<view class="a">
			<view class="b">{{dvd.title}}</view>
			<view class="c">
				<image :src="dvd.channel.channel_img" mode="widthFix"></image>
			</view>
			<text class="d">{{dvd.channel.name}}</text>
			<text class="e">2020-12-15</text>
			<view class="f">
				{{dvd.info.video_note}}
			</view>
			<!-- 下划线 -->
			<view class="g"></view>
			<view class="h">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{dvd.praise_num}}
			</view>
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
				id: '',
				dvd: []
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsVideo();
		},
		methods: {
			async getNewsVideo() {
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsVideo.content)
				//#endif
				this.dvd = res
			},
		},
	}
</script>

<style lang="scss" scoped>
	.k {
		video {
			width: 100%;
		}

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
				top: 86rpx;
				left: 64rpx;
			}

			.e {
				position: absolute;
				top: 86rpx;
				left: 220rpx;
				font-size: 26rpx;
				color: #bbbbbb;
			}

			.f {
				font-size: 18rpx;
				color: #777777;
				line-height: 40rpx;
			}

			.g {
				border: 1rpx solid #ecf0f1;
				position: relative;
				top: 40rpx;
			}
			.h{
				position: absolute;
				top: 350rpx;
				font-size: 16rpx;
				color: #777777;
				left: 20rpx;
			}
		}
	}
</style>
