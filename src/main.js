import Vue from 'vue'

import "./icon/iconfont.css"

import App from './App.vue'
import router from './router'
import store from './store'
import flex from './set/index'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

import vueFeedback from 'vue-feedback'
import VueTouch from 'vue-touch'

Vue.prototype.url = "http://127.0.0.1:3000"

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(vueFeedback)
Vue.use(Vant)

Vue.use(flex)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    
}).$mount('#app')
