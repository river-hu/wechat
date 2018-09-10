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

import io from "socket.io-client";

let url = "http://www.raziel.site:3000"

Vue.prototype.url = url

let ws = io.connect(url);
Vue.prototype.ws =  ws
Vue.prototype.list = [];

ws.on("connect", () => {
    ws.emit("join", "server");
  });

Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(vueFeedback)
Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    
}).$mount('#app')
