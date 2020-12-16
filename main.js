import Vue from 'vue'
import App from './App'
import uniIcons from './components/uni-icons/uni-icons.vue'
<<<<<<< HEAD
Vue.component('uniIcons', uniIcons)
import uniPopup from './components/uni-popup/uni-popup.vue';
import shareBtn from './components/share-btn/share-btn.vue';
=======
Vue.component('uniIcons',uniIcons)
>>>>>>> fa4687f331288e56125ff67ff204b3d210b39ee5

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
components: {
	'uniPopup,'
	uniPopup,
	'shareBtn',
	shareBtn
}
