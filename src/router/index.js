import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index'
import seller from '../views/Seller'
import detail from '../views/Detail'
import catalog from '../views/Catalog'
import hobby from '../views/Hobby'
import selleron from '../views/Selleron'
import ranklist from "../views/RankingList"
import ranking  from "../views/Ranking"
import login from "../views/Login" //登陆
import bookshelf from "../views/Bookshelf"
import search from "../views/Search" //搜索
import vip from "../views/Vip" //vip
import recharge from "../views/Recharge" //充值

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Index',
    component:Index,
    redirect:'/seller', //重定向
    children:[
      {
        path:'seller',
        component:seller
      },
    ]
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:detail
  },
  {
    path:'/catalog/:id',
    name:'catalog',
    component:catalog
  },
  {
    path:'/hobby',
    name:'hobby',
    component:hobby
  },
  {
    path:'/selleron',
    name:'selleron',
    component:selleron
  },
  {
    path:'/ranklist',
    name:'ranklist',
    redirect:'/ranklist/female',
    component:ranklist,
    children:[
      {
        path:':type',
        // name:'ranking',
        component:ranking
      }
    ]
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/bookshelf',
    component:bookshelf
  },
  {
    path:'/search',
    component:search
  },
  {
    path:'/vip',
    component:vip
  },
  {
    path:'/recharge',
    component:recharge
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
