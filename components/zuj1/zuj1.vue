<template>
	<view class="Box">
		<!-- 请在这个大Box里自行写内容 -->

		<!-- 如何画美人鱼-->
		<view class="a">
			<text class="top">如何画美人鱼</text>
			<image class="im" src="https://vde.fatiao.pro/fatiao/xingqu/01/fmt/1.jpg" mode="aspectFit"></image>
			<view class="bto">
				<text class="btoa">兴趣爱好</text>
				<image src="../../static/点赞.png" mode="aspectFit">379</image>
				<image src="../../static/观看ico.png" mode="aspectFit">4742</image>
				<image src="../../static/分享.png" mode="aspectFit">分享</image>
			</view>
		</view>

		<!-- 列表 -->
		<view class="ab">
			<view class="aba">
				<image src="https://img.fatiao.pro/new/fatiao/article/2019/05/06/830734eaa9.jpg" mode="aspectFit"></image>
				<view class="abr">
					<view class="abrt">钓鱼调漂技巧</view>
					<view class="abto">
						<view class="abtot">兴趣爱好</view>
						<image class="ac" src="../../static/点赞.png" mode="aspectFit"><text>424</text></image>
						<image class="ac" src="../../static/观看ico.png" mode="aspectFit"><text>7234</text></image>
						<image class="ac" src="../../static/分享.png" mode="aspectFit"><text>分享</text></image>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>
<style lang="scss">

	.Box {
		margin-top: 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -1px 3px 4px #f4f4f5;

		.a {
			border-bottom: 1px solid #89908a;
			padding-top: 10px;

			.top {
				padding-left: 20px;
				font-size: 18px;
				font-weight: 500;
			}

			.im {
				width: 90%;
				padding-left: 5%;
			}

			.bto {
				height: 60rpx;
				text-align: right;
				padding-right: 20px;

				.btoa {
					padding-left: 20px;
					float: left;
				}

				image {
					opacity: 0.5;
					width: 30rpx;
					height: 30rpx;
					padding: 0 5px;
				}
			}
		}

		.ab {
			padding-top: 10px;
			border-bottom: 1px solid #89908a;
			.aba {
				padding-left: 10px;
				image {
					width: 160px;
					height: 120px;
					border-radius: 20%;
					float: left;
					display: inline-block;
				}
				.abr {
					height: 120px;
					.abrt {
						padding: 10px 10px 30px;
						font-weight: 400;
					}
					.abto {
						bottom:0;
						height: 60rpx;
						text-align: right;
						display: flex;
						.abtot{
							flex: 10;
							font-size: 10px;
							font-weight: 1000;
							display: inline-block;
						}
						.ac{
							flex: 3;
							margin: 0;
							width: 30rpx;
							height: 30rpx;
							padding-right: 10px;
							display: inline-block;
							text{
							font-weight: 10;
							font-size: 5px;	
							}
						}
					}
				}
			}
		}
	}

</style>
