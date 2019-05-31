console.log("ok")

import Vue from 'vue'

// 导入路由
import VueRouter  from 'vue-router'
Vue.use(VueRouter)

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import app from './App.vue'

//导入router.js路由模块
import router from './router.js'

// 导入MUI的css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint_UI组件
import {Header,Swipe, SwipeItem } from  'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm = new Vue({
    el: "#app",
    render:c=>c(app),
    router
})