<template>
	<view class="Box">
		<scroll-view scroll-y class="v1">
			<!-- 请在这个大Box里自行写内容 -->
			<view>
				<view v-for="item in swipers" :key="item.id">
					<text>{{item.title}}</text>
					<view>
						<image :src="item.info.video_img" mode="widthFix"></image>
						<text class="t1">{{item.channel.name}}</text>
					</view>
				</view>
			</view>
			<view class="">
				组件6
			</view>
			<view class="">
				组件6
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	export default {
		data() {
			return {
				swipers: {}
			};
		},
		created() {
			this.getSwipers();
			//console.log('组件6加载完毕');
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1¬channel=27&order=1&limit=1&channel_id=1')
				console.log(res)
				this.swipers = res
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

		.v1 {
			display: flex;
			flex-direction: column;

			text {
				font-size: 15px;
				margin-left: 17px;
				font-weight: 900;
			}

			image {
				border-radius: 5px;
				width: 90%;
				margin-left: 17px;
				margin-top: 3px;
			}
			.t1{
			}
		}
	}
</style>
