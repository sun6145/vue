import VueRouter from 'vue-router'

// 导入 路由 组件
import homeContainer from './components/tabbar/homeContainer.vue' 
import memberContainer from './components/tabbar/memberContainer.vue' 
import shopcarCcontainer from './components/tabbar/shopcarContainer.vue' 
import searchContainer from './components/tabbar/searchContainer.vue' 

// 导入路由子组件


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/', redirect:"/home"},
    {path:'/home', component:homeContainer},
    {path:'/member', component:memberContainer},
    {path:'/shopcar', component:shopcarCcontainer},
    {path:'/search', component:searchContainer},
  ],
  linkActiveClass:"mui-active" //默认 router-link-active
})

// 把路由对象暴露出去
export default router