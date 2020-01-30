import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// Api
import apiV1 from '@/api/apiV1.ts'
import vueInstall from '@/utils/vueInstall'

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(apiV1)
Vue.use(vueInstall)

new Vue({
  router,
  // mixins: [Mixin],
  store,
  data: {
    bus: new Vue(),
    eventHub: new Vue()
  },
  render: h => h(App)
}).$mount('#app')
