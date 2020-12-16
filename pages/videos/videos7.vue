<template>
	<view class="Box">
		<view class="video">
			<video :src="lists.info.video_url"></video>
		</view>
		<view class="content">
			<view class="title">{{lists.title}}</view>
			<view class="author">
				<image class="author_img" :src="lists.author.img" mode="widthFix"></image>
				<text class="text_name">{{lists.author.name}}</text>
				<text class="text_time">2020-09-15</text>
			</view>
			<view class="introduce">{{lists.info.video_note}}</view>
			<view class="bottom"></view>
			<view class="interact">
				<view class="zan">
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
					<text>{{lists.praise_num}}</text>
				</view>
				<!-- 转发 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
					<text>分享</text>
				</view>
			</view>
		</view>
		<view class="">
		</view>

		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>
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
				lists: [],
				sharedata: '',

			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
		},
		methods: {
			//分享
			open: function() {
				this.$refs.sharepopup.open();
			},
			//获取数据
			async getNewsDetail() {
				const result = await myRequestGet('/api/v1/fatiao/index/detail?id=	' + this.id)
				this.lists = result
			},
		}
	}
</script>

<style lang="scss" scoped>
	.Box {
		.video {
			background-color: #FFFFFF;

			video {
				width: 100%;
			}
		}

		.content {
			padding: 40rpx 20rpx;

			.title {
				font-size: 50rpx;
				font-weight: 700;
			}

			.author {
				margin-top: 20rpx;
				font-size: 28rpx;
				position: relative;

				.author_img {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					position: absolute;
					top: -10rpx;
					left: 0;
				}

				.text_name {
					margin-left: 70rpx;
				}

				.text_time {
					color: #a4b0be;
					margin-left: 20rpx;
				}
			}

			.introduce {
				color: #636e72;
				margin-top: 25rpx;
				line-height: 1.8em;
				text-indent: 2em;
			}

			.bottom {
				margin-top: 50rpx;
				border-top: 2rpx solid #bdc3c7;
			}

			.interact {
				margin-top: 30rpx;
				width: 100%;

				//点赞
				.zan {
					float: left;
					margin-left: 20rpx;
					color: #a4b0be;
					font-size: 30rpx;

					uni-icons {
						margin-left: 8rpx;
					}

					text {
						font-size: 30rpx;
						margin-right: 8rpx;
					}
				}

				//分享
				.share {
					float: right;
					font-weight: bold;
					color: #747d8c;
					font-size: 30rpx;

					uni-icons {
						margin-right: 8rpx;
					}
				}
			}
		}
	}
</style>
