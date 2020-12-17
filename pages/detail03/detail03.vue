<template>
	<view>
		<view class="v1">{{xqsj.title}}</view>
		<view class="v2">
			<image :src="xqsj.channel.channel_img" mode="widthFix"></image>
			<text class="t1">{{xqsj.channel.name}}</text>
			<text class="t2">2018-12-05</text>
		</view>
		<view class="c1">
			<!-- #ifdef H5 -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<rich-text :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
		</view>
		<view class="dx"></view>
		<view class="zan">
			<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:blue':''"></text>{{xqsj.play_num}}
			<!-- //这里为各自接口里的数据，“xqsj”根据各自声明复制的更改 -->
		</view>
		<view class="share" @click.stop="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>
			<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
				<text>{{item.title}}</text>
			</view>
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>
	</view>

</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	import shareBtn from '../../components/share-btn/share-btn.vue';
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';


	export default {
		data() {
			return {
				sharedata: '',
				id: "",
				xqsj: {},
				content: [],
				htmlNodes: [],
				flag: false,
				video1: [],
				article1: []
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
			shareOn() {
				this.$refs.sharepopup.open();
			},
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.xqsj.play_num = parseInt(this.xqsj.play_num) + 1
					this.flag = true
				} else {
					this.xqsj.play_num = this.xqsj.play_num - 1
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				//#ifdef MP-ALIPAY
				//#endif
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			async getVideos1() {
				let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
					channel_id: 6,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1
				});
				console.log(result);
				this.video1 = result.list;
			},
			async getArticle1() {
				let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
					channel_id: 6,
					articleLimit: 8,
					videoLimit: 1,
					clearcache: 'redis',
					limit: 1
				});
				console.log(result);
				this.article1 = result;
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

<style lang="scss" scoped>
	.share {
		margin-top: -50rpx;
		margin-left: 550rpx;
	}

	.zan {
		margin-top: 20rpx;
		margin-left: 50rpx;
	}

	.dx {
		border: 2rpx solid #BCBEC2;
		background-color: #BCBEC2;
		width: 95%;
		margin: 0 auto;
	}

	.v1 {
		font-size: 40rpx;
		margin-left: 20rpx;
	}

	.c1 {
		width: 90%;
		margin: 70rpx auto 0rpx auto;
		line-height: 70rpx;
	}

	.v2 {
		position: relative;

		image {
			width: 50rpx;
			position: absolute;
			top: 10rpx;
			left: 15rpx;
		}

		.t1 {
			font-size: 26rpx;
			position: absolute;
			top: 20rpx;
			left: 80rpx;
		}

		.t2 {
			font-size: 26rpx;
			position: absolute;
			top: 20rpx;
			left: 190rpx;
			color: #C0C4CC;
		}
	}
</style>
