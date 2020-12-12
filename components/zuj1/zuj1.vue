<template>
	<view>
		<view class="jiaju">
			<view class="fnx" v-for="item in swipers" :key="item.id">
				<text>{{item.title}}</text>
				<view class="card">
					<image :src="item.info.video_img" mode="widthFix"></image>
					<button class="time">02:00</button>
				</view>
			</view>
		</view>
		<view class="zoon">
			<view class="town">
				<text class="xzhen">动植小镇</text>
			</view>
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
			.card {
				position: relative;
				image {
					width: 100%;
					border-radius: 5px;
				}
				.time {
					position: absolute;
					bottom: 11px;
					right: 5px;
					width: 52px;
					height: 20px;
					background-color: #7E7878;
					border-radius: 40px;
					text-align: center;
					line-height: 20px;
					font-size: 10px;
				}
			}

		}
	}

	.zoon {
		width: 95%;
		margin: 3px auto;
		.town{
			.xzhen{
				border-bottom: 10px solid #97B7FE;
				font-size: 12px;
			}
		}
	}
</style>
