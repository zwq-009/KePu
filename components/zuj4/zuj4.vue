<template>
	<view class="Box">
		<view class="content">
			<view class="box1" v-for="item in videos" :key="item.id">
				<!-- 视频页面的标题 -->
				<input type="text" value="初到新家爱宠如何饲养" />
				<!-- 视频封面 -->
				<view class="imgbox">
					<image class="imgbox_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="imgbox_length">{{item.video_length}}</view>
				</view>
				<view class="author">
					<view class="author_name">{{item.author.name}}</view>
				</view>
			</view>
			<view class="box2" v-for="item in lists" :key="item.id">
				<view class="classify">
					<image class="cover_image" :src="item.info.cover_image" mode="widthFix"></image>
				</view>
				
			</view>
		</view>
		<view class="">
			组件4
		</view>
		<view class="">
			组件4
		</view>
	</view>
</template>

<script>
	import { myRequestGet } from '@/utils/request.js';
	export default {
		data() {
			return {
				videos:[],
				lists:[]
			};
		},
		created() {
			this.getVideos1();
			this.getList1();
		},
		methods:{
			//https://openapp.fatiao.pro/api/v1/fatiao/index/list?id=3&p=1&notchannel=27&order=1&limit=1&channel_id=3
			async getVideos1(){
				let result = await myRequestGet('/api/v1/fatiao/index/list',{
					id : 38,
					p : 1,
					notchannel : 27,
					order:1,
					limit:1,
					channel_id:3
				});
				this.videos = result;
			},
			async getList1(){
				let result = await myRequestGet('/api/v1/fatiao/article/list',{
					id : 3,
					p : 1,
					notchannel : 27,
					order:1,
					limit:6,
					channel_id:3
				})
			}
			
		}
	}
</script>

<style lang="scss">
.Box {
	margin-top: 20rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 10rpx;
	box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
	.content{
		padding: 20rpx;
		.box1{
			// border-bottom: 2rpx solid #bdc3c7;
			imput{
				font-size: 32rpx;
			}
			.imgbox{
				position: relative;
				margin-top: 20rpx;
				.imgbox_img{
					border-radius: 10rpx;
					width: 100%;
				}
				.imgbox_length{
					position: absolute;
					bottom: 20rpx;
					right: 20rpx;
					width: 80rpx;
					height:30rpx;
					font-size: 20rpx;
					text-align: center;
					border-radius: 20rpx;
					color:#FFFFFF;
					background-color: rgba($color: #2d3436, $alpha: 0.6);
				}
			}
			.author{
				margin-top: 10rpx;	
				.author_name{
					font-size: 24rpx;
					color: #2f3640;
					font-weight: 700;
					position: relative;
				}
				.author_name::after {
					content: '';
					display: block;
					position: absolute;
					top: 30rpx;
					width: 70rpx;
					height: 8rpx;
					background-color: #74b9ff;
				}
			}
		}
		.box2{
			.classify{
				.cover_image{
					
				}
			}
		}
	}
	
}
</style>
