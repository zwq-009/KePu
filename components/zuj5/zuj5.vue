<template>
	<view>组件5</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';
export default {
	data() {
		return {};
	},
	created() {
		this.getSwipers();
		console.log('组件5加载完毕');
	},
	methods: {
		async getSwipers() {
			// https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=28&p=1&notchannel=27&order=1&limit=1&channel_id=28
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 28,
				p: 1,
				notchannel: 27,
				order: 1,
				limit: 1,
				channel_id: 28
			});
			console.log(result);
		}
	}
};
</script>

<style lang="scss"></style>
