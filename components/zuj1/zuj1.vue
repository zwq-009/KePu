<template>
	<view class="Box">
		<!-- 第一部分 丰年虾 -->
		<view class="first" v-for="item in swipers" :key="item.id" @click="goDetail(item)">
			<text>{{item.title}}</text>
			<view class="location">
				<image :src="item.info.video_img" mode="widthFix"></image>
				<button class="time">{{item.video_length}}</button>
			</view>
			<view class="rail">
				<view class="left">{{item.channel.name}}</view>
				<!-- <view class="share" @click="open">
						<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
						<text>分享</text>
					</view> -->
				<view class="right">
					<span class="t-icon t-icon-zan"></span>
					<text>{{item.praise_num}}</text>
					<span class="t-icon t-icon-shipin"></span>
					<text>{{item.play_num}}</text>
					<span class="t-icon t-icon-weixin"></span>
					<text style="color: #000;">分享</text>
				</view>
			</view>
		</view>
		<!-- 第二部分 兔纸 -->
		<view class="second" v-for="item in rabbits" :key="item.id" @click="goZoon(item)">
			<view class="cover">
				<image :src="item.info.cover_img" mode="widthFix"></image>
			</view>
			<view class="list">
				<view class="item">{{item.title}}</view>
				<view class="item"></view>
				<view class="item rail">
					<view class="left">{{item.channel.name}}</view>
					<view class="right">
						<span class="t-icon t-icon-zan"></span>
						<text>{{item.praise_num}}</text>
						<span class="t-icon t-icon-shipin"></span>
						<text>{{item.play_num}}</text>
						<span class="t-icon t-icon-weixin"></span>
						<text style="color: #000;">分享</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 第三部分 画眉 -->
		<view class="first" v-for="item in thrushs" :key="item.id">
			<text>{{item.title}}</text>
			<view class="location">
				<image :src="item.info.video_img" mode="widthFix"></image>
				<button class="time">{{item.video_length}}</button>
			</view>
			<view class="rail">
				<view class="left">{{item.channel.name}}</view>
				<view class="right">
					<span class="t-icon t-icon-zan"></span>
					<text>{{item.praise_num}}</text>
					<span class="t-icon t-icon-shipin"></span>
					<text>{{item.play_num}}</text>
					<span class="t-icon t-icon-weixin"></span>
					<text style="color: #000;">分享</text>
				</view>
			</view>
		</view>
		<!-- 第四部分 姬月季 -->
		<view class="second" v-for="item in roses" :key="item.id">
			<view class="cover">
				<image :src="item.info.cover_img" mode="widthFix"></image>
			</view>
			<view class="list">
				<view class="item">{{item.title}}</view>
				<view class="item"></view>
				<view class="item rail">
					<view class="left">{{item.channel.name}}</view>
					<view class="right">
						<span class="t-icon t-icon-zan"></span>
						<text>{{item.praise_num}}</text>
						<span class="t-icon t-icon-shipin"></span>
						<text>{{item.play_num}}</text>
						<span class="t-icon t-icon-weixin"></span>
						<text style="color: #000;">分享</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 第五部分 小仓鼠 -->
		<view class="first" v-for="item in  hamsters" :key="item.id">
			<text>{{item.title}}</text>
			<view class="location">
				<image :src="item.info.video_img" mode="widthFix"></image>
				<button class="time">{{item.video_length}}</button>
			</view>
			<view class="rail">
				<view class="left">{{item.channel.name}}</view>
				<view class="right">
					<span class="t-icon t-icon-zan"></span>
					<text>{{item.praise_num}}</text>
					<span class="t-icon t-icon-shipin"></span>
					<text>{{item.play_num}}</text>
					<span class="t-icon t-icon-weixin"></span>
					<text style="color: #000;">分享</text>
				</view>
			</view>
		</view>
		<!-- 第六部分 鸡心果 -->
		<view class="second" v-for="item in fruits" :key="item.id">
			<view class="cover">
				<image :src="item.info.cover_img" mode="widthFix"></image>
			</view>
			<view class="list">
				<view class="item">{{item.title}}</view>
				<view class="item"></view>
				<view class="item rail">
					<view class="left">{{item.channel.name}}</view>
					<view class="right">
						<span class="t-icon t-icon-zan"></span>
						<text>{{item.praise_num}}</text>
						<span class="t-icon t-icon-shipin"></span>
						<text>{{item.play_num}}</text>
						<span class="t-icon t-icon-weixin"></span>
						<text style="color: #000;">分享</text>
					</view>
				</view>
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
				swipers: {},
				rabbits: {},
				thrushs: {},
				roses: {},
				hamsters: {},
				fruits: {}
			};
		},
		created() {
			this.getSwipers();
			this.getRabbits();
			this.getThrushs();
			this.getRoses();
			this.getHamsters();
			this.getFruits();
		},
		methods: {
			goDetail(item) {
				uni.navigateTo({
					url: `/pages/goodDetailOne/goodDetailOne?id=${item.id}`
				})
			},
			goZoon(item) {
				uni.navigateTo({
					url: `/pages/Jump/Jump?id=${item.id}`
				})
			},

			async getSwipers() {
				const res = await myRequestGet('/api/v1/fatiao/index/list?id=1&p=1¬channel=27&order=1&limit=1&channel_id=28')
				//console.log(res)
				this.swipers = res
			},
			async getRabbits() {
				const reg = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=1&notchannel=27&order=1&limit=6&channel_id=28')
				//console.log(reg)
				this.rabbits = reg
			},
			async getThrushs() {
				const ref = await myRequestGet('/api/v1/fatiao/index/list?id=28&p=2&notchannel=27&order=1&limit=1&channel_id=28')
				//console.log(ref)
				this.thrushs = ref
			},
			async getRoses() {
				const red = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=2&notchannel=27&order=1&limit=6&channel_id=28')
				//console.log(red)
				this.roses = red
			},
			async getHamsters() {
				const rec = await myRequestGet('/api/v1/fatiao/index/list?id=28&p=3&notchannel=27&order=1&limit=1&channel_id=28')
				//console.log(rec)
				this.hamsters = rec
			},
			async getFruits() {
				const reb = await myRequestGet('/api/v1/fatiao/article/list?id=28&p=3&notchannel=27&order=1&limit=6&channel_id=28')
				//console.log(reb)
				this.fruits = reb
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;
		.first {
			width: 95%;
			margin: 0 auto;
			text {
				display: block;
				margin: 10px 0;
				font-size: 16px;
				color: #000;
			}
			.location {
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
					color: #fff;
				}
			}
			.rail {
				height: 40px;
				border-bottom: 1px solid #000;
				.left {
					float: left;
					font-size: 12px;
					font-weight: 800;
					width: 96rpx;
					height: 40rpx;
					line-height: 66rpx;
					border-bottom:8px solid #74B9FF;
				}
				.right {
					float: right;
					width: 280rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text {
						font-size: 12px;
						color: #bbb;
					}
				}
			}
		}
		.second {
			margin: 10px auto;
			width: 95%;
			height: 80px;
			border-bottom: 1px solid #000;
			.cover {
				width: 33%;
				float: left;
				image {
					width: 100%;
					border-radius: 5px;
				}
			}
			.list {
				width: 65%;
				float: right;
				.item {
					display: flex;
					flex: 1;
					height: 20px;
				}
				.rail {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.left{
						width: 96rpx;
						font-size: 12px;
						font-weight: 800;
						height: 34rpx;
						line-height: 50rpx;
						border-bottom:8px solid #74B9FF;
					}
					.right{
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 280rpx;
						text{
							font-size: 12px;
							color: #bbb;
						}
					}
				}
			}
		}
	}
</style>
<!-- <uni-popup ref="sharepopup" type="bottom">
	<share-btn :sharedataTemp="sharedata"></share-btn>
</uni-popup> -->
