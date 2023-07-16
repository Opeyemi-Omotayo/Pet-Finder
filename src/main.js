import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


createApp(App).use(store).use(router).use(VueLazyload,{preLoad: 1.3, error: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/04/DEFAULT-GATEWAY-IS-NOT-AVAILABLE.png',  loading: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png',  attempt: 1}).mount('#app')
