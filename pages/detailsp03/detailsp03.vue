<template>
	<view class="v1">
		<view class="v2">
			<video :src="xq.info.video_url" object-fit="cover"></video>
		</view>
		<text>{{xq.title}}</text>
		<view class="v3">
			<image :src="xq.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xq.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="v4">
			{{xq.info.video_note}}
		</view>
		<view class="">
			<uni-popup ref="sharepopup" type="bottom">
				<share-btn :sharedataTemp="sharedata"></share-btn>
			</uni-popup>
		</view>
		<view class="share" @click.stop="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>
		<view class="zan">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xq.play_num}}
		</view>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	import shareBtn from '../../components/share-btn/share-btn.vue';
	export default {
		data() {
			return {
				sharedata: '',
				id: "",
				xq: {},
				flag: false,
				video1:[],
				article1:[]
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
			this.getVideos1()
			this.getArticle1()
		},
		methods: {
			goArticleDetail(item) {
				uni.navigateTo({
					url: `/pages/detail03/detail03?id=${item.id}`
				});
			},
			// 点击进入视频详情页
			goVideoDetail(item) {
				uni.navigateTo({
					url: `/pages/detailsp03/detailsp03?id=${item.id}`
				});
			},
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.xq.play_num = parseInt(this.xq.play_num) + 1
					this.flag = true
				} else {
					this.xq.play_num = this.xq.play_num - 1
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/index/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xq = res
			},
			async getVideos1() {
				let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 6,
					articleLimit:8,
					videoLimit:1,
					clearcache:'redis',
					limit:1
				});
				console.log(result);
				this.video1 = result.list;
			},
			async getArticle1() {
				let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 6,
					articleLimit:8,
					videoLimit:1,
					clearcache:'redis',
					limit:1
				});
				console.log(result);
				this.article1 = result.list;
			},
			open: function() {
				this.$refs.sharepopup.open();
			}
		},
		components: {
			uniPopup,
			shareBtn
		}
	}
</script>


<style lang="scss">
	.v1 {
		.zan{
			margin-top: -55rpx;
		}
		.share{
			margin-top: 550rpx;
			margin-left: 500rpx;
		}
		.v4{
			position: absolute;
			top: 600rpx;
			left: 20rpx;
			font-size: 20px;
			line-height: 70rpx;
			text-indent: 2em;
			width: 95%;
			font-weight: 700;
			border-bottom: 3rpx solid #ecf0f1;
		}
		.v3 {
			position: relative;
			image {
				width: 50rpx;
				position: absolute;
				left: 30rpx;
				top: 15rpx;
				border-radius: 50%;
			}

			.t1 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				top: 20rpx;
				left: 85rpx;
			}

			.t2 {
				font-size: 14px;
				font-weight: 100;
				position: absolute;
				left: 215rpx;
				top: 22rpx;
				color: #BCBEC2;
			}
		}

		// width: 100%;
		// height: 500px;
		text {
			font-size: 25px;
			font-weight: 900;
			margin-left: 30rpx;
		}

		.v2 {
			width: 100%;
			height: 400rpx;
			margin-bottom: 30rpx;

			video {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
