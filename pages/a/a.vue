<template>
	<view class="a">
		<!-- 文本页面 -->
		<view class="b">{{fat&&fat.title}}</view>
		<view class="c">
			<image :src="fat.channel&&fat.channel.channel_img" mode="widthFix"></image>
		</view>
		<text class="d">
			{{fat.channel&&fat.channel.name}}
		</text>
		<text class="e">2020-12-15</text>
		<view class="f">
			<!-- #ifdef H5 -->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
		</view>
		<!-- 我是有底线的 -->
		<view class="g"></view>
		<view class="h">
			<uni-icons type="eye-filled" size="14" color="#a4b0be" class="aa2">
			</uni-icons>
			{{fat&&fat.play_num}}
			<!-- 点赞构造 -->
			<view class="i">
				<text class="iconfont icon-dianzan" @click="addone()" :style="flag?'color:yellow':''"></text>{{fat&&fat.praise_num}}
				<!-- <uni-icons type="hand-thumbsup" size="14" color="#a4b0be" class="aa2">
				</uni-icons>
				{{fat.praise_num}} -->
				<!-- 分享弹窗 -->
				<view class="share" @click.stop="open">
					<uni-icons type="weixin" size="14" color="#0abc64"></uni-icons>
					<text @click="shareOn">分享</text>
				</view>
			</view>
			<view>
				<uni-popup ref="sharepopup" type="bottom">
					<share-btn :sharedataTemp="sharedata"></share-btn>
				</uni-popup>
			</view>
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
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				fat: [],
				content: [],
				flag: false,
				sharedata: ''
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			console.log(this.id)
		},
		methods: {
			one() {
				this.flag = !this.flag
			},
			addone(i) {
				if (this.flag == false) {
					this.fat.praise_num = parseInt(this.fat.praise_num) + 1
					this.flag = true
				} else {
					this.fat.praise_num = this.fat.praise_num - 1
					this.flag = false
				}
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.fat = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				// console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			shareOn() {
				this.$refs.sharepopup.open();
			}
		},
		components: {
			uniPopup,
			shareBtn
		},
	}
</script>

<style lang="scss" scoped>
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
			top: 82rpx;
			left: 64rpx;
		}

		.e {
			position: absolute;
			top: 82rpx;
			left: 220rpx;
			font-size: 26rpx;
			color: #bbbbbb;
		}

		.f {
			line-height: 60rpx;
			font-size: 32rpx;
			color: #333333;
		}

		.g {
			border: 1rpx solid #ecf0f1;
			position: relative;
			top: 40rpx;
		}

		.h {
			position: relative;
			top: 100rpx;
			font-size: 16rpx;
			color: #777777;
			left: 20rpx;


			.i {
				position: absolute;
				top: 0rpx;
				left: 100rpx;

				.share {
					position: relative;
					right: -460rpx;
					top: -30rpx;
				}
			}
		}
	}
</style>
