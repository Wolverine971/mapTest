import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from "vuex"
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import '~vuetify/src/stylus/main'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

Vue.config.productionTip = false
// );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
