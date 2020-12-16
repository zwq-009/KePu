import Vue from 'vue'
import App from './App'
import uniIcons from './components/uni-icons/uni-icons.vue'
Vue.component('uniIcons', uniIcons)
import uniPopup from './components/uni-popup/uni-popup.vue';
import shareBtn from './components/share-btn/share-btn.vue';

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
