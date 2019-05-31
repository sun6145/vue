console.log("ok")


import app from './App.vue'
import Vue from 'vue'


// 按需道路Mint_UI组件
import {Header} from  'mint-ui'
Vue.component(Header.name, Header);

// 道路MUI的css
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: "#app",
    render:c=>c(app)
})