<template>
	<view class="Box">
		<view class="content">
			<view class="title">{{lists.title}}</view>
			<view class="author">
				<image class="author_img" :src="lists.author.img" mode="widthFix"></image>
				<text class="text_name">{{lists.author.name}}</text>
				<text class="text_time">2020-09-13</text>
			</view>
			<view class="introduce">
				<!-- #ifdef H5 -->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<rich-text :nodes="content"></rich-text>
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<rich-text :nodes="htmlNodes"></rich-text>
				<!-- #endif -->
				<view class="bottom"></view>
			</view>
			<view class="interact">
				<!-- 点赞按钮 -->
				<view class="zan">
					<uni-icons type="eye" size="14" color="#a4b0be"></uni-icons>
					<text>{{lists.play_num}}</text>
					<uni-icons type="hand-thumbsup" size="14" color="#a4b0be"></uni-icons>
					<text>{{lists.praise_num}}</text>
				</view>
				<!-- 转发 -->
				<view class="share" @click.stop="open">
					<uni-icons type="redo" size="15" color="#00b894"></uni-icons>
					<text>分享</text>
				</view>
			</view>
		</view>
		<view class="center"></view>
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>
	</view>
</template>

<script>
	import {
		myRequestGet
	} from '@/utils/request.js';
	import {
		formatRichText
	} from '@/utils/format.js';
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				lists: [],
				content: "",
				htmlNodes:[],
				//这里面添加这个,分享添加
				sharedata: '',
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail();
			this.getDetailContent();
			console.log(this.id);
		},
		methods: {
			//分享
			open: function() {
				this.$refs.sharepopup.open();
			},
			//获取数据
			async getNewsDetail() {
				const result = await myRequestGet('/api/v1/fatiao/article/detail?id=	' + this.id)
				console.log(result)
				//#ifdef MP-ALIPAY
				// this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.lists = result
			},
			//解析content数据
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
		}
	}
</script>

<style lang="scss">
	.Box {
		border-top: 1px solid #bdc3c7;

		.content {
			padding: 40rpx 20rpx;

			.title {
				font-size: 50rpx;
			}

			.author {
				margin-top: 20rpx;
				font-size: 28rpx;
				position: relative;

				.author_img {
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
					position: absolute;
					top: -10rpx;
					left: 0;
				}

				.text_name {
					margin-left: 70rpx;
				}

				.text_time {
					color: #a4b0be;
					margin-left: 20rpx;
				}
			}

			.introduce {
				margin-top: 20rpx;
				font-size: 36rpx;
				line-height: 2em;

				.bottom {
					margin-top: 50rpx;
					border-top: 2rpx solid #bdc3c7;
				}
			}

			.interact {
				margin-top: 30rpx;
				width: 100%;

				// display: flex;
				//点赞
				.zan {
					float: left;
					color: #a4b0be;
					font-size: 30rpx;

					uni-icons {
						margin-right: 8rpx;
					}

					text {
						font-size: 30rpx;
						margin-right: 8rpx;
					}
				}

				//分享
				.share {
					float: right;
					font-weight: bold;
					color: #747d8c;
					font-size: 30rpx;

					uni-icons {
						margin-right: 8rpx;
					}
				}
			}
		}

		.center {
			margin-top: 30rpx;
			border-bottom: 30rpx solid #bdc3c7;
		}
	}
</style>
