import Vue from 'vue'
import App from './App'
<<<<<<< HEAD

=======
>>>>>>> 7e97e21fdf305d44186a6dce94380a6437a5e76c
import uniIcons from './components/uni-icons/uni-icons.vue'
Vue.component('uniIcons',uniIcons)

//引入插件（用于分享按钮）
import uniPopup from './components/uni-popup/uni-popup.vue';
import shareBtn from './components/share-btn/share-btn.vue';
// 注册插件
components: {
	'uniPopup,'
	uniPopup,
	'shareBtn',
	shareBtn
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
