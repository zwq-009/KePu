import Vue from 'vue'
import App from './App'
// 全局引入字体图标组件
import uniIcons from './components/uni-icons/uni-icons.vue'
Vue.component('uniIcons',uniIcons)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
