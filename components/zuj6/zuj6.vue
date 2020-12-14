<template>
	<view class="Box">
		<scroll-view scroll-y class="v1">
			<!-- 请在这个大Box里自行写内容 -->
			<view>
				<view v-for="item in swipers" :key="item.id">
					<text>{{item.title}}</text>
					<view class="vv">
						<image :src="item.info.video_img" mode="widthFix"></image>
						<view class="v2"><text>{{item.channel.name}}<text class="t1">109 8.15k</text></text></view>
						<view class="v6">{{item.video_length}}</view>
					</view>
				</view>
			</view>
			<view v-for="item in swiperss" :key="item.id" class="v3">
				<view class="v4">
					<image :src="item.info.cover_img" mode="widthFix"></image>
					<text>{{item.title}}</text>
					<view class="v5"></view>
				</view>
			</view>
			<view class="">
			
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
				swipers: {},
				swiperss:{}
			};
		},
		created() {
			this.getSwipers();
			//console.log('组件6加载完毕');
			this.getSwiperss();
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1¬channel=27&order=1&limit=1&channel_id=1')
				console.log(res)
				this.swipers = res
			},
			async getSwiperss() {
				const ress = await myRequestGet('/api/v1/fatiao/article/list?id=1&p=1¬channel=27&order=1&limit=6&channel_id=1')
				console.log(ress)
				this.swiperss = ress
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
		
			.vv{
				position: relative;
				.v6{
					color: #FFFFFF;
					border-radius: 5px;
					position: absolute;
					right: 36px;
					bottom: 30px;
					font-size: 10px;
					width: 30px;
					height: 20px;
					background-color: #333333;
					//opacity: 0.3;
					z-index: 1;
				}
			}
			.v3{
				margin-top: 20px;
			.v4{
				width: 100%;
				.v5{
					clear: both;
				}
				//padding: px;
				image{
					width: 250rpx;
					float: left;
				}
				text{
					//float: right;
					margin-right: 100rpx;
					font-weight: 100;
					
				}
			}
			}
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
			.v2{
				text{
					font-size: 10px;
					font-weight: 900;
				}
				.t1{
					margin-left:200px;
				}
			}
		}
	}
</style>
