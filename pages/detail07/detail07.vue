<template>
	<view>
		<view class="a">
			<view class="aa">{{xqsj.query}}</view>
			<view class="ab">{{xqsj.author.name}}</view>
			<view class="ac">{{xqsj.add_time}}</view>
			<view class="">
				<text>{{xqsj.info.name}}</text>
			</view>
			<view class="content">
				<rich-text :nodes="xqsj.info.content.replace(/\<img/gi, '<img style=max-width:96%;height:auto;padding:7px')"></rich-text>
			</view>

			<view class="">
				<text>猜你喜欢</text>
			</view>

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
				id: "",
				xqsj: {}
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			console.log(this.id)
		},

		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				console.log(res)
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.newsDetail.content)
				//#endif
				this.xqsj = res
			}
		}
	};
</script>

<style lang="scss">
	.a {
		.aa {
			padding: 4% 2%;
			font-size: 45rpx;
			font-weight: 550;
			border-bottom: 2rpx solid #9fecec;
		}

		.ab {
			font-size: 15rpx;
			padding: 1% 2% 0;
			float: left;
		}

		.ac {
			font-size: 15rpx;
			padding: 1% 2% 0;
		}

		.content {
			padding: 15rpx;
			font-size: 32rpx;
			color: gray;
			text-indent: 50rpx;

			img {
				width: 90%;
				height: 50%;

			}
		}
	}
</style>
