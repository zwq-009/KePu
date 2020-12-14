<template>
	<view class="Box">
		<!-- 请在这个大Box里自行写内容 -->
		<view class="top" v-for="item in swipers" :key="item.id">
			<text class="top_1">{{item.title}}</text>
			<image :src="item.info.video_img">
				<view class="time">{{item.video_length}}</view>
			</image>		
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
				swipers: []
			};
		},

		created() {
			this.getVideos1();
		},
		methods: {
			async getVideos1() {
				// https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=26&p=1&order=1&limit=1&channel_id=26
				let result = await myRequestGet('/api/v1/fatiao/index/list?id=6&p=1&notchannel=27&order=1&limit=1&channel_id=6');
				console.log(result);
				this.swipers = result
			}
		}
	};
</script>

<style lang="scss">
	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
	}
	.top_1{
		font-size: 34rpx;
	}
	.top{
		position: relative;
	}
	.time{
		position: absolute;
		right: 0rpx;
		bottom: 0rpx;
		color: #FFFFFF;
		background-color:#666666;
		width: 80rpx;
		height: 40rpx;
		border-radius: 25%;
		font-size: 30rpx;
	}
</style>
