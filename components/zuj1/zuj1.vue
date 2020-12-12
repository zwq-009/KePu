<template>
	<view class="jiaju">
		<view class="fnx" v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img" mode="widthFix"></image>
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
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1¬channel=27&order=1&limit=1&channel_id=28')
				//console.log(res)

				this.swipers = res

			}
		}
	}
</script>

<style lang="scss">
	.jiaju {
		display: flex;
		width: 95%;
		margin: 0 auto;

		.fnx {
			flex: 1;

			text {
				display: block;
				margin: 12px 0px;
			}

			image {
				width: 100%;
			}
		}
	}
</style>
