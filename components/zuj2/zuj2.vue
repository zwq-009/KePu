<template>
	<view class="Box">
		<!-- 请在这个大Box里自行写内容 -->
<<<<<<< HEAD
		<!-- 第一段苹果MAC -->
		<view class="a" v-for="item in swipers" :key="item.id" @click="getA()">
			<view class="aa">{{item.title}}</view>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="aaa">{{item.channel.name}}</view>
			<view class="aaaa"></view>
			<view class="a1">{{item.video_length}}</view>
			<view class="aaa2">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons>
				<text class="fx">分享</text> 
			</view>
		</view>
		<view class="c"></view>
		<!-- 第一段图文 -->
		<view class="b" v-for="item in pinguos" :key="item.id">
			<!-- <view class="bb">{{item.channel.name}}</view> -->
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
			<view class="b2">
				<view class="aaaa"></view>
				<text class="bb">{{item.channel.name}}</text>
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons>分享
				<!-- <text class="fx">分享</text> -->
			</view>
			<view class="b1"></view>
			<view class="c"></view>
		</view>
		<!-- 第二段重装MAC -->
		<view class="a" v-for="item in chongs" :key="item.id">
			<view class="aa">{{item.title}}</view>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="aaa">{{item.channel.name}}</view>
			<view class="aaaa"></view>
			<view class="a1">{{item.video_length}}</view>
			<view class="aaa2">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons> 
				<text class="fx">分享</text> 
			</view>
		</view>
		<view class="c"></view>
		<!-- 第二段图文 -->
		<view class="b" v-for="item in bijis" :key="item.id">
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
			<view class="b2">
				<view class="aaaa"></view>
				<text class="bb">{{item.channel.name}}</text>
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons>分享 
				<!-- <text class="fx">分享</text> -->
			</view>
			<view class="b1"></view>
			<view class="c"></view>
		</view>
		<!-- 第三段 -->
		<view class="a" v-for="item in dians" :key="item.id">
			<view class="aa">{{item.title}}</view>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="aaa">{{item.channel.name}}</view>
			<view class="aaaa"></view>
			<view class="a1">{{item.video_length}}</view>
			<view class="aaa2">
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons>
				<text class="fx">分享</text> 
			</view>
		</view>
		<view class="c"></view>
		<!-- 第三段图文 -->
		<view class="b" v-for="item in mees" :key="item.id">
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
			<view class="b2">
				<view class="aaaa"></view>
				<text class="bb">{{item.channel.name}}</text>
				<uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.praise_num}}
				<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2"></uni-icons>{{item.play_num}}
				<uni-icons type="weixin" size="14" color="#0abc64" class="aa2"></uni-icons>分享
				<!-- <text class="fx">分享</text> -->
			</view>
			<view class="b1"></view>
			<view class="c"></view>
=======

		<view class="a" v-for="item in swipers" :key="item.id">
			<text>{{item.title}}</text>
			<image :src="item.info.video_img" mode="widthFix"></image>
			<view class="a1">{{item.video_length}}</view>
			<view class="a2">{{item.praise_num}}</view>
		</view>
		<view class="b" v-for="item in pinguos" :key="item.id">
			<view>{{item.channel.name}}</view>
			<image :src="item.info.cover_img" mode="widthFix"></image>
			<text>{{item.title}}</text>
>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
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
				swipers: {},
<<<<<<< HEAD
				pinguos: {},
				chongs:{},
				bijis:{},
				dians:{},
				mees:{}
=======
				pinguos: {}
>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
			};
		},
		created() {
			this.getSwipers();
			this.getPinguos();
<<<<<<< HEAD
			this.getChongs();
			this.getBijis();
			this.getDians();
			this.getMees();
=======
>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
		},
		methods: {
			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=4&p=1&notchannel=27&order=1&limit=1&channel_id=4')
				this.swipers = res
<<<<<<< HEAD
				
			},
			async getPinguos() {
				const res1 = await myRequestGet(
					'/api/v1/fatiao/article/list?id=4&p=1&notchannel=27&order=1&limit=6&channel_id=4')
				this.pinguos = res1
			},
			async getChongs() {
				const res2 = await myRequestGet(
					'/api/v1/fatiao/index/list?id=4&p=2&notchannel=27&order=1&limit=1&channel_id=4')
				this.chongs = res2
			},
			async getBijis() {
				const res3 = await myRequestGet(
					'/api/v1/fatiao/article/list?id=4&p=2&notchannel=27&order=1&limit=6&channel_id=4')
				this.bijis = res3
			},
			async getDians() {
				const res4 = await myRequestGet(
					'/api/v1/fatiao/index/list?id=4&p=3&notchannel=27&order=1&limit=1&channel_id=4')
				this.dians = res4
			},
			async getMees() {
				const res5 = await myRequestGet(
					'/api/v1/fatiao/article/list?id=4&p=3&notchannel=27&order=1&limit=6&channel_id=4')
				this.mees = res5
			},
			getA(){
				uni.navigateTo({
					url: '../../pages/a/a?id='+78
				});
			}
=======
			},
			async getPinguos() {
				const result = await myRequestGet(
					'/api/v1/fatiao/article/list?id=4&p=1&notchannel=27&order=1&limit=6&channel_id=4')
				this.pinguos = result
			},

>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
		}
	}
</script>

<style lang="scss">
<<<<<<< HEAD
	.Box {
		margin-top: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
		padding-left: 20rpx;
		padding-right: 20rpx;
		.a {
			position: relative;
			.aaaa{			//标题下划线样式
				position: absolute;
				left: 0;
				bottom: -4rpx;
				height: 18rpx;
				width: 127rpx;
				background-color: #007AFF;
				opacity: 0.5;
			}
			image {
				// margin-left: 20px;
				width: 710rpx;
			}
			.aa {
				margin-left: 10rpx;
				padding-top: 30rpx;
				font-size: 40rpx;
			}
			.a1 {
				position: absolute;
				width: 90rpx;
				height: 30rpx;
				bottom: 60rpx;
				right: 40rpx;
				font-size: 22rpx;
				background-color: #807e7f;
				border-top-left-radius: 20rpx;
				border-top-right-radius: 20rpx;
				border-bottom-left-radius: 20rpx;
				border-bottom-right-radius: 20rpx;
				color: white;
				text-align: center;
				line-height: 30rpx;
			}
			.aaa2{
				position: absolute;
				right: 30rpx;
				bottom: 0;
				font-size: 26rpx;
				//color: #74b9ff;
				color: #c7c7c7;
				margin-left: 20rpx;
				// padding: 10px;
				.fx{
					font-weight: 800;
					color: #656a73;
				}
				.aa2{
					margin-left: 20rpx;
				}
			}
			.aaa {
				font-size: 26rpx;
				font-weight: 800;
				// border-bottom: 10rpx solid #74b9ff;
				width: 136rpx;
			}
		}
		.b {
			position:relative;
			.aaaa{
				position: absolute;
				left: 20rpx;
				bottom: -4rpx;
				height: 18rpx;
				width: 127rpx;
				background-color: #007AFF;
				opacity: 0.5;
			}
			.b2{
				font-size: 26rpx;
				color: #c7c7c7;
				position:absolute;
				bottom: 20rpx;
				right: 20rpx;
				.aa2{
					right: -40rpx;
				}
				.fx{
					font-weight: 900;
					color: #656a73;
					font-size: 26rpx;
				}
				.bb{
					font-size: 26rpx;
					font-weight: 800;
					// border-bottom: 10rpx solid #74b9ff;
					width: 136rpx;
					left: 0;
				}
			}
			.b1 {
				clear: both;
			}
			image {
				margin-top: 20rpx;
				width: 250rpx;
				border-radius: 5%;
				float: left;
			}
			text {
				margin-top: 20rpx;
				margin-left: 20rpx;
				font-size: 34rpx;
				color: #3b3b3b;
			}
		}
		.c {
			margin-top: 20rpx;
			border: 1rpx solid #f4f4f4;
		}
	}
</style>
=======

	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;

		.a {
			position: relative;

			.a1 {
				position: absolute;
				width: 35px;
				height: 15px;
				right: 25rpx;
				font-size: 17rpx;
				background-color: #807e7f;
				border-radius: 25%;
				color: white;
				text-align:center;
			}
		}

		.b {
			image {
				width: 250rpx;
				border-radius: 5%;
			}
		}
	}

</style>
>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
