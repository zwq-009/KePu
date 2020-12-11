<template>
	<view class="v1">
		<view v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img" mode="widthFix"></image>
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
	}
</style>
