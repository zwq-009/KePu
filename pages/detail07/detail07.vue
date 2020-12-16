<template>
	<view>
		<view class="a">
			<view class="aa">{{xqsj.query}}</view>
			<image class="author_img" :src="xqsj.channel.channel_img" mode="widthFix"></image>
			<view class="ab">{{xqsj.author.name}}</view>
			<view class="ac">2019-07-28</view>
			<view class="">
				<text>{{xqsj.info.name}}</text>
			</view>
			<view class="content">
				<rich-text :nodes="xqsj.info.content.replace(/\<img/gi, '<img style=max-width:96%;height:auto;padding:7px')"></rich-text>
			</view>
			<view class="bto">
				<uni-icons type="eye" size="19" color="#a4b0be"></uni-icons>
				<text>{{xqsj.play_num}}</text>
				<uni-icons @click="doSupport" type="hand-thumbsup" size="19" color="#a4b0be">fgsh</uni-icons>
				<text>{{xqsj.praise_num}}</text>

				<view class="btor">
					<uni-icons type="redo" size="19" color="#00aa00" @click="shareOn"></uni-icons>
					<text @click.stop="shareOn">分享</text>
				</view>
			</view>
		</view>

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
	// import {
	// 	formatRichText
	// } from '@/utils/format.js'
	// import parse from '@/utils/htmlparser.js';

	export default {
		data() {
			return {
				id: "",
				xqsj: {},
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				this.htmlNodes = parse(this.content)
			},
			shareOn: function() {
				this.$refs.sharepopup.open();
			},
		}
	};
</script>

<style lang="scss" scoped>
	.a {
		padding: 0 4%;

		.author_img {
			display: block;
			float: left;
			border-radius: 50%;
			width: 7%;
		}

		.aa {
			padding: 4% 2%;
			font-size: 45rpx;
			font-weight: 550;
			border-bottom: 2rpx solid #9fecec;
		}

		.ab {
			font-size: 28rpx;
			font-weight: 550;
			padding: 1% 2% 0;
			float: left;
		}

		.ac {
			font-size: 28rpx;
			font-weight: 550;
			padding: 1% 2% 0;
			opacity: 0.5;
		}

		.content {
			padding: 5% 1% 5%;
			font-weight: 500;
			font-size: 35rpx;
			line-height: 60rpx;
			color: gray;
			text-indent: 50rpx;
			border-bottom: 1rpx solid #b7bfe1;

			img {
				width: 90%;
				height: 50%;

			}
		}

		.bto {
			padding: 5% 3%;
			text-align: left;
			line-height: 46rpx;
			letter-spacing: 5rpx;

			.btor {
				display: inline-block;
				float: right;
			}
		}
	}
</style>
