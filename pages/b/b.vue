<template>
	<view class="k">
		<!-- 视频页面 -->
		<video :src="dvd.info&&dvd.info.video_url" controls autoplay="true"></video>
		<view class="a">
			<view class="b">{{dvd&&dvd.title}}</view>
			<view class="c">
				<image :src="dvd.channel&&dvd.channel.channel_img" mode="widthFix"></image>
			</view>
			<text class="d">{{dvd.channel&&dvd.channel.name}}</text>
			<text class="e">2020-12-15</text>
			<view class="f">
				{{dvd.info&&dvd.info.video_note}}
			</view>
			<!-- 下划线 -->
			<view class="g"></view>
			<view class="h">
				<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:yellow':''"></text>{{dvd.praise_num}}
				<!-- <uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2"></uni-icons>{{dvd.praise_num}} -->
				<!-- 分享弹窗 -->
				<view class="share" @click.stop="open">
					<uni-icons type="weixin" size="14" color="#0abc64"></uni-icons>
					<text @click="shareOn">分享</text>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="likes">
				猜你喜欢
			</view>
			<view class="title" v-for="item in Videos" :key="item.id">
				<view>{{item.title}}</view>
				<image :src="item.video_img" mode="widthFix"></image>
			</view>
		</view>
		<view>
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	//引入插件
	import uniPopup from '../../components/uni-popup/uni-popup.vue'
	import shareBtn from '../../components/share-btn/share-btn.vue';
	export default {
		data() {
			return {
				id: '',
				dvd: {},
				sharedata: '',
				flag: false,
				Videos:[]
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsVideo();
			this.getVideos();
		},
		methods: {
			// 点赞方法
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.dvd.praise_num = parseInt(this.dvd.praise_num) + 1
					this.flag = true
				} else {
					this.dvd.praise_num = this.dvd.praise_num - 1
					this.flag = false
				}
			},
			async getNewsVideo() {
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsVideo.content)
				//#endif
				this.dvd = res
			},
			// 猜你喜欢的方法
			// /api/v1/fatiao/index/more-detail?channel_id=4&articleLimit=8&videoLimit=1&clearcache=redis&limit=1
			async getVideos() {
				const result = await myRequestGet(
					'/api/v1/fatiao/index/more-detail?channel_id=4&articleLimit=8&videoLimit=1&clearcache=redis&limit=1');
				this.Videos = result.list
			},

			shareOn() {
				this.$refs.sharepopup.open();
			},
		},
		components: {
			uniPopup,
			shareBtn
		},
	}
</script>

<style lang="scss" scoped>
	.k {
		
		video {
			width: 100%;
		}

		.a {
			position: relative;
			margin: 30rpx;

			.b {
				font-size: 40rpx;
				color: #333333;
				font-weight: 600;
				margin-bottom: 20rpx;
			}

			.c {
				image {
					width: 50rpx;
				}
			}

			.d {
				font-size: 26rpx;
				position: absolute;
				top: 86rpx;
				left: 64rpx;
			}

			.e {
				position: absolute;
				top: 86rpx;
				left: 220rpx;
				font-size: 26rpx;
				color: #bbbbbb;
			}

			.f {
				font-size: 18rpx;
				color: #777777;
				line-height: 40rpx;
			}

			.g {
				border: 1rpx solid #ecf0f1;
				position: relative;
				top: 40rpx;
			}

			.h {
				position: absolute;
				top: 390rpx;
				font-size: 16rpx;
				color: #777777;
				left: 20rpx;

				.share {
					// position: absolute;
					position: relative;
					left: 550rpx;
					bottom: 32rpx;
					font-size: 26rpx;
					color: #777777;
					font-weight: 700;
				}
			}

		}
	}
	.box{
		image{
			width: 200rpx;
		}
	}
</style>
