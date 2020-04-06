import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/Symbol.css'
import './assets/css/iconfont.css'
import './assets/js/iconfont'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
