<template>
	<view>
		<view v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img"></image>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js'
	export default {
		data() {
			return {
				swipers: {}
			};
		},
		created() {
			this.getSwipers();
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=4&p=1&notchannel=27&order=1&limit=1&channel_id=4')
				console.log(res)
				this.swipers = res
			}
		}
	}
</script>

<style lang="scss">

</style>
