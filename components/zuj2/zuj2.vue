<template>
	<view class="Box">
		<!-- 请在这个大Box里自行写内容 -->

		<view class="a" v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="a1">{{item.video_length}}</view>
			<view class="a2">{{item.praise_num}}</view>
		</view>
		<view class="b" v-for="item in pinguos" :key="item.id">
			<view>{{item.channel.name}}</view>
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
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

		.a {
			position: relative;

			.a1 {
				position: absolute;
				width: 35px;
				height: 15px;
				right: 25rpx;
				font-size: 17rpx;
				background-color: #807e7f;
				border-radius: 25%;
				color: white;
				text-align:center;
			}
		}

		.b {
			image {
				width: 250rpx;
				border-radius: 5%;
			}
		}
	}

</style>
