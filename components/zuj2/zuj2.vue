<template>
	<view class="Box">
		<!-- 请在这个大Box里自行写内容 -->
		<view class="a" v-for="item in swipers" :key="item.id">
			<view class="aa">{{item.title}}</view>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="aaa">{{item.channel.name}}</view>
			<view class="a1">{{item.video_length}}</view>
			<view class="aaa2">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons> 
				<text class="fx">分享</text> 
			</view>
		</view>
		<view class="c"></view>
		<view class="b" v-for="item in pinguos" :key="item.id">
			<!-- <view class="bb">{{item.channel.name}}</view> -->
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
			<view class="b2">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons> 分享 
			</view>
			<view class="b1"></view>
			<view class="c"></view>
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
				swipers: {},
				pinguos: {}
			};
		},
		created() {
			this.getSwipers();
			this.getPinguos();
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=4&p=1&notchannel=27&order=1&limit=1&channel_id=4')
				this.swipers = res
			},
			async getPinguos() {
				const result = await myRequestGet(
					'/api/v1/fatiao/article/list?id=4&p=1&notchannel=27&order=1&limit=6&channel_id=4')
				this.pinguos = result
			},
		}
	}
</script>

<style lang="scss">
	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
		padding-left: 10px;
		padding-right: 10px;

		.a {
			position: relative;

			image {
				// margin-left: 20px;
				width: 370px;
			}

			.aa {
				margin-left: 10rpx;
				padding-top: 30rpx;
				font-size: 20px;
			}

			.a1 {
				position: absolute;
				width: 45px;
				height: 15px;
				bottom: 30px;
				right: 20px;
				font-size: 8rpx;
				background-color: #807e7f;
				border-top-left-radius: 10px;
				border-top-right-radius: 10px;
				border-bottom-left-radius: 10px;
				border-bottom-right-radius: 10px;
				color: white;
				text-align: center;
			}
			.aaa2{
				position: absolute;
				right: 15px;
				bottom: 0px;
				font-size: 13px;
				color: #74b9ff;
				// padding: 10px;
				.fx{
					font-weight: 800;
					color: #656a73;
				}
			}
			.aaa {
				font-size: 13px;
				font-weight: 700;
				border-bottom: 5px solid #74b9ff;
				width: 68px;
			}
		}

		.b {
			position:relative;
			.b2{
				font-size: 13px;
				color: #74b9ff;
				position:absolute;
				bottom: 20rpx;
				right: 20rpx;
			}
			.b1 {
				clear: both;
			}

			image {
				margin-top: 10px;
				width: 250rpx;
				border-radius: 5%;
				float: left;
			}

			text {
				margin-top: 10px;
				margin-left: 10px;
				font-size: 17px;
				color: #3b3b3b;
			}
		}

		.c {
			margin-top: 10px;
			border: 1rpx solid #f4f4f4;
		}
	}
</style>
