import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/Symbol.css'
import './assets/css/iconfont.css'
import './assets/js/iconfont'

Vue.config.productionTip = false
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
