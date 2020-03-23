import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$bus =new Vue()  //给Vue原型添加一个$bus时间总线
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
