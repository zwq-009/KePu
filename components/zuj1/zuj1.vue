<template>
	<view class="jiaju">
		<view class="fnx">
			<text>丰年虾的孵化方法</text>
			<image src="../../static/xia.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import {myRequestGet} from '@/utils/request.js'
	export default {
		data() {
			return {
				
			};
			methods:{
				
			}
		}
	}
</script>

<style lang="scss">
	 .jiaju {
	    display: flex;
	    width: 95%;
	    margin: 0 auto;
	    .fnx {
	      flex: 1;
	      text {
	        display: block;
	        margin: 12px 0px;
	      }
	     image{
			 width: 100%;
		 }
	    }
	  }
</style>
