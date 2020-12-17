<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2276299_kjumt6lacbm.eot?t=1608187623377'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2276299_kjumt6lacbm.eot?t=1608187623377#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANEAAsAAAAABxQAAAL2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqCHIICATYCJAMICwYABCAFhG0HMRspBsgekiSBEAGFECXuAACIh3/XPu/L5FOyJQDPGlAx2cpVRRIKj6+v0ESa9er5X5v6bQUIFCLTFEDYzLrz2SwrSG8HLBNO7da56fDl/McxX5fi+c53c8lIStoNcDyQDbQDq0TWIB/A/zB2gUtYTaCYLZtoe3VjJ3jIrE6BuCjwGvDIOWSZhftCt2ZkFg+go59uih/gfvj7+G99eJB0GlbWrtNVeij9td2Oaib+DzvoI4A5nw5sHA1WApnYV2vYAcWBlZCiBVzMB/tKD35tb1tfJfb6zxNdVuoQmAkZ98R0WbdKnkCmPkeAi6MOQrPRLWXYa2XzjO1RmzIveXnd2jHxTAzA8MeIxT2vnxevZ7vKd9gzVby2t3q/Cve9/WXB9p4e0aZn5joBqVxZvbDQB9VX99P2H56y/rVoZXfdeXDa0upUm+o8/MHatXPvtM4X668ZKVpOVhda/46VicV7fry7idBMz+p2FP7+GlCf7Xs+kIdPzow733rYAFVb926fbIoadonef3zeCnJ5s3JV2ZjzpfveV4r/uh3Nnd6Nibkr7keupyKf5SrDIFsKn4O514JipkO0UArQjjTPUNjv/hvvn/o8PjKm8F+/ZvAz4n+HtnYk62cC/ZsyBj+X2bMs62xLmbLKrI0kR6CbzikKWtgy3qexkklvogv9HJNB0jMLGn0LkRm7EjqqjdDVtwmKFWrGVxNQSOQBlpsFEMY6DMlob6Ex1kNkxn6Ejsn+QNfYQFAciOAZq8UheFVQomFEj7WDWNDZrJyjZl5Rejvhe80ammWHuG5CnYIbyyWyYriGWAmdo4+zj1cwxmGO2iy4GqxHzGYbtlObkeiYxMCYPV8q5epOJNHZLOBlG4rQYAg9TGsQJtCxseL86oxX6fvtCF4vMw3aUlKj7EZQTkLjmJyErAeyRmDtVXIvmzj14SkwDAfjUDYWWDVoRpiZ2WD2+mZGhA4jYRjhs8sntStxfQWS9UWWr1sDhSVNYWc1eicFjXXIkQMAAAA=') format('woff2'),
  url('//at.alicdn.com/t/font_2276299_kjumt6lacbm.woff?t=1608187623377') format('woff'),
  url('//at.alicdn.com/t/font_2276299_kjumt6lacbm.ttf?t=1608187623377') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2276299_kjumt6lacbm.svg?t=1608187623377#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dianzan:before {
  content: "\e644";
}

	/*每个页面公共css */
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}
	/* #endif */
</style>
