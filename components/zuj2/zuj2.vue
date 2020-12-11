<template>
	<view>
		苹果MAC OS X怎么按照双系统
		<image :src="item.img" v-for="item in swipers" :key="item.id"></image>
	</view>
</template>

<script>
	import {myRequest}from '@/utils/request.js'
	export default {
		data() {
			return {
				swipers:[]
			};
		},
		created(){
			this.getSwipers();
		},
		methods:{
			async getSwipers(){
				const res = await myRequest({
					method:'GET',
					url:'/api/v1/fatiao/index/list?id=4&p=1&notchannel=27&order=1&limit=1&channel_id=4'
				})
				this.swipers = res.message
			}
		}
	}
</script>

<style lang="scss">

</style>
