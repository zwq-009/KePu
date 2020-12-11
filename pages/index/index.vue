<template>
	<view class="Box">
		<view class="top">
			<view class="nav">
				<view class="nav-item "><view class="item" :class="{ active: isActive == 1 }" @click="chenked(1)">家居</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 2 }" @click="chenked(2)">科技</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 3 }" @click="chenked(3)">美妆</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 4 }" @click="chenked(4)">萌宠</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 5 }" @click="chenked(5)">游戏</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 6 }" @click="chenked(6)">生活</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 7 }" @click="chenked(7)">兴趣</view></view>
			</view>
		</view>
		<!-- nav-item -->
		<view class="nav_item" v-if="isActive == 1"><zuj1></zuj1></view>
		<view class="nav_item" v-if="isActive == 2"><zuj2></zuj2></view>
		<view class="nav_item" v-if="isActive == 3"><zuj3></zuj3></view>
		<view class="nav_item" v-if="isActive == 4"><zuj4></zuj4></view>
		<view class="nav_item" v-if="isActive == 5"><zuj5></zuj5></view>
		<view class="nav_item" v-if="isActive == 6"><zuj6></zuj6></view>
		<view class="nav_item" v-if="isActive == 7"><zuj7></zuj7></view>
	</view>
</template>

<script>
import zuj1 from '@/components/zuj1/zuj1.vue';
import zuj2 from '@/components/zuj2/zuj2.vue';
import zuj3 from '@/components/zuj3/zuj3.vue';
import zuj4 from '@/components/zuj4/zuj4.vue';
import zuj5 from '@/components/zuj5/zuj5.vue';
import zuj6 from '@/components/zuj6/zuj6.vue';
import zuj7 from '@/components/zuj7/zuj7.vue';

export default {
	data() {
		return { isActive: 1 };
	},
	methods: {
		chenked(type) {
			this.isActive = type;
		}
	},
	components: {
		zuj1,
		zuj2,
		zuj3,
		zuj4,
		zuj5,
		zuj6,
		zuj7
	}
};
</script>

<style lang="scss" scoped>
.Box {
	.top {
		.nav {
			background-color: #0984e3;
			display: flex;
			height: 44px;
			color: #eee;
			font-size: 16px;
			overflow: scroll;
			.nav-item {
				// width: 80px;
				flex: 1;
				.item {
					width: 72px;
					text-align: center;
					line-height: 33px;
					height: 33px;
					margin-top: 10px;
				}
				.active {
					color: #fff;
					font-weight: 550;
					position: relative;
				}
				.active::after {
					content: '';
					position: absolute;
					width: 30rpx;
					height: 4rpx;
					background-color: #fff;
					left: 0px;
					right: 0px;
					bottom: 0px;
					margin: auto;
				}
			}
		}
	}
}
</style>
