<template>
	<navigator>
		<view class="v1" v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img"></image>
		</view>
	</navigator>
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
		image {
			width: 100%;
		}
	}
</style>
