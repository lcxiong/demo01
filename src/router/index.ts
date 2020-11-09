import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

//登录
import Login from '../views/login/login.vue'
//子路由窗口
import Home from '../views/home/home.vue'
//我的
import My from '../views/my/my.vue'
//主页
import Index from '../views/index/index.vue'
//事件信息
import Eventinfo from '../views/eventinfo/eventinfo.vue'
//事件详情
import Eventdetails from '../views/eventinfo/eventdetails.vue'
//数据监测
import Datamonitoring from '../views/datamonitoring/datamonitoring.vue'
//历史记录
import Historylist from '../views/historylist/historylist.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/login'//***重定向
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'登录'
    }
  },

  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect:'/index',//***重定向
    meta:{
      title:'系统'
    },
    //子路由
    children: [
      {
        path: "/index",
        name: "index",
        components: {
          mainView: Index
        },
        meta: {
          title:'主页'
        }
      },
      {
        path: "/eventinfo",
        name: "eventinfo",
        components: {
          mainView: Eventinfo
        },
        meta: {
          title:'事件信息'
        }
      },
      {
        path: "/my",
        name: "my",
        components: {
          mainView: My
        },
        meta: {
          title:'我的'
        }
      },
      {
        path: "/datamonitoring",
        name: "datamonitoring",
        components: {
          mainView: Datamonitoring
        },
        meta: {
          title:'数据监测'
        }
      },
      {
        path: "/historylist",
        name: "historylist",
        components: {
          mainView: Historylist
        },
        meta: {
          title:'历史记录'
        }
      },
    ]
  },

  {
    path: '/eventdetails/:eid',
    name: 'eventdetails',
    component: Eventdetails,
    meta:{
      title:'事件详情'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
