<template>
	<view class="Box">
		<view class="box">
			<view class="videos" v-for="item in videos" :key="item.id">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
						<view class="zan"><uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>123</view>
						<!-- 转发 -->
						<view class="share"><text>分享</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
export default {
	data() {
		return {
			videos: []
		};
	},
	created() {
		this.getVideos1();
		console.log('组件5加载完毕');
	},
	methods: {
		async getVideos1() {
			// https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=26&p=1&order=1&limit=1&channel_id=26
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 26,
				p: 1,
				order: 1,
				limit: 1,
				channel_id: 26
			});
			console.log(result);
			this.videos = result;
		}
	}
};
</script>

<style lang="scss">
.Box {
	color: #353b48;
	width: 750rpx;
	// 高度仅实验展示用
	height: 800px;
	margin-top: 20rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
	padding-top: 6px;
	.box {
		// 颜色为了看位置
		// background-color: green;
		width: 702rpx;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		.videos {
			padding: 0;
			.videos_title {
			}
			.imgbox {
				position: relative;
				margin-top: 16rpx;
				width: 100%;
				position: relative;
				.videos_img {
					border-radius: 5px;
					width: 100%;
				}
				.videos_length {
					font-size: 16rpx;
					width: 70rpx;
					background-color: rgba($color: #2d3436, $alpha: 0.6);
					text-align: center;
					color: #ffffff;
					border-radius: 14rpx;
					position: absolute;
					right: 8rpx;
					bottom: 18rpx;
				}
			}
			.channel {
				// background-color: pink;
				height: 30px;
				line-height: 30px;
				padding-bottom: 7px;
				border-bottom: 1px solid #ecf0f1;
				.author {
					float: left;
					font-size: 12px;
					font-weight: bolder;
					position: relative;
				}
				.author::after {
					content: '';
					background-color: #74b9ff;
					width: 97rpx;
					height: 8rpx;
					position: absolute;
					left: 0px;
					top: 44rpx;
				}
				.interact {
					float: right;
					.zan {
						display: inline-block;
						color: #a4b0be;
						font-size: 14px;
					}
					.share {
						display: inline-block;
						margin-left: 80rpx;
						font-size: 14px;
						font-weight: bold;
						color: #747d8c;
					}
				}
			}
		}
	}
}
</style>
