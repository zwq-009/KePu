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
		<view class="fx" @click="open">
			<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
			<text>分享</text>
		</view>
		<view class="tx">
			<view class="content">
				<view style="width: 150rpx;" class="cj">
					<view class="animate-wrap">
						<view class="aa" :class="{'bb':item.index}" v-for="(item,index) in viewList" :key="index">
							<image style="width: 50rpx;height: 50rpx;" mode="widthFix" :src="item.src" :animation="item.animationData"></image>
						</view>
					</view>
					<image class="logo" src="/static/logo.png" @click="handleClick(index)"></image>
				</view>
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
	import {
		formatRichText
	} from '@/utils/format.js'
	import parse from '@/utils/htmlparser.js';
	export default {
		data() {
			return {
				id: "",
				xqsj: {},
				content: [],
				htmlNodes: [],
				sharedata: '',
				viewList: [],
				pageDate: new Date()
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
			this.getDetailContent()
			console.log(this.id)
		},
		methods: {
			random() {
				let r = Math.floor(Math.random() * 256),
					g = Math.floor(Math.random() * 256),
					b = Math.floor(Math.random() * 256);
				return `rgb(${r},${g},${b})`
			},
			handleClick(index) {
				let that = this
				let arr = ['-', '']
				let arrImg = [
					'https://7669-video-bj26u-1259614424.tcb.qcloud.la/%E7%82%B9%E8%B5%9E.png?sign=e353c2ab58bda3549d2e7fac31f5d3e7&t=1583142034',
					'https://7669-video-bj26u-1259614424.tcb.qcloud.la/%E7%88%B1%E5%BF%83.png?sign=5224a63103c7ca727c9f663044e47f46&t=1583142069',
					'https://7669-video-bj26u-1259614424.tcb.qcloud.la/%E6%98%9F%E6%98%9F.png?sign=cb0f11885b49d17fce6b5844ef41f28b&t=1583142381'
				]
				let randomImg = Math.floor(Math.random() * arrImg.length)
				let arrPush = {
					src: arrImg[randomImg], //用于随机图标
					back: this.random(), //可删除
					index: false, //可删除
					time: 5000, //动画时间
					animationData: {}, //每个盒子独立动画不可全局
					x: Math.ceil(Math.random() * 50), //方向间距
					q: Math.floor(Math.random() * arr.length), //用于随机方向
					lastIndex: 5, //用于删除数组
					timer: null, //定时器
					lastTime: 1000 //删除的倒计时
				}
				//函数节流限制用户频繁快速点击
				if (new Date() - this.pageDate < 300) return //如果点击的时间小于初始时间300
				this.pageDate = new Date(); //同步全局时间
				//------------
				this.viewList.push(arrPush)

				//核心动画
				this.viewList.forEach((i, o, v) => {
					var animate = uni.createAnimation({
						duration: i.time,
						timingFunction: 'ease-out'
					})
					that.animation = animate
					let time = arr[i.q] + i.x //随机的方向和间距
					setTimeout(() => {
						that.animation.translateY(-200).step()
						that.animation.opacity(0).step()
						that.animation.translateX(Number(time)).step()
						i.animationData = that.animation.export()
						//函数防抖
						clearInterval(i.timer)
						i.timer = setInterval(() => {
							i.lastIndex-- //每个图标的倒计时到0删除
							if (i.lastIndex < 0) {
								v.splice(i, 1)
								clearInterval(i.timer)
							}
						}, i.lastTime)
					}, 100)
				})
			},
			async getNewsDetail() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				// console.log(res)
				//#ifdef MP-ALIPAY
				//this.htmlNodes = parse(this.newsDetail.content)
				//this.xqsj = res
				//#endif
				this.xqsj = res
			},
			async getDetailContent() {
				const res = await myRequestGet('/api/v1/fatiao/article/detail?id=' + this.id)
				this.content = formatRichText(res.info.content)
				// console.log(this.content)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich - text不支持字符串， 需要是nodes数组
				this.htmlNodes = parse(this.content)
				//#endif
			},
			open: function() {
				this.$refs.sharepopup.open();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.fx {
		margin-left: 600rpx;
		margin-top: 30rpx;
		height: 100rpx;
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


	// .animate-wrap{
	// 	display: inline-block;
	// 	margin-right: 10px;
	// 	position: absolute;
	// 	width: 100rpx;
	// }
	// .content{
	// 	position: absolute;
	// 	bottom: 50rpx;
	// 	right: 200rpx;
	// }
	.tx {
		position: absolute;
		bottom: -100rpx;
		left: 0rpx;
		.logo {
			//display: inline-block;
			//position: absolute;
			// right: 0;
			// top: 0;
			width: 70rpx;
			height: 70rpx;
		}

		.aa {
			position: absolute;
			font-size: 30rpx;
			color: white;
			text-align: center;
			line-height: 50rpx;
			width: 80rpx;
			//transform: translateY(0);
		}
	}
</style>
