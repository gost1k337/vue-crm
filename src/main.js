import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'


import Loader from '@/components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(VueMeta)
Vue.use(titlePlugin)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Paginate', Paginate)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyAXkwJcih1dbkOHl8IYupjlSJFj-oljtRU",
  authDomain: "vue-javascript-crm.firebaseapp.com",
  databaseURL: "https://vue-javascript-crm.firebaseio.com",
  projectId: "vue-javascript-crm",
  storageBucket: "vue-javascript-crm.appspot.com",
  messagingSenderId: "295383288115",
  appId: "1:295383288115:web:96e3e1d73f5fa4558c5646"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
