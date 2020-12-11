<template>
	<view class="Box">
		ZZQ
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
export default {
	data() {
		return {};
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
		}
	}
};
</script>

<style lang="scss">
.Box {
	height: 100px;
	margin-top: 10px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	box-shadow: 0 -1px 3px 4px #f4f4f5;
}
</style>
