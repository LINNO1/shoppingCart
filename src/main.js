import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

import router from './routers'
/*使用VueResource插件*/
Vue.use(VueResource)




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
