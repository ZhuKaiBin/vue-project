//这个路由ts最主要的就是createRouter，这里是根，指定要绑定的路由就行

import { createRouter, createWebHistory } from 'vue-router'
import vueIndex from '../views/index.vue'


// history模式：
// 优点：URL更加美观，不带#，更接近传统的网站RUL
// 缺点：后期项目上线，需要服务器端支持，否则刷新会出现404

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//路由器的工作模式:History路由模式
  routes: [//一个个的路由路径管理
    {
      path: '/',//这个是父路由
      name: 'home',
      component: vueIndex,
      // children:[
      //   {
      //     // http://localhost:3000/home/index  前端通过这个路径，可以直接访问到【/views/index.vue】
      //     path:"/home/index",//路由路径
      //     name:"index",
      //     meta:{title:"首页Index"},
      //     component:()=>import("../views/index.vue")
      //   }
      // ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
    ,
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue')
    },
    {
      path: '/views/1',
      name: 'views1',
      component: () => import('@/views/1.vue'),
    },
    {
      path: '/app',
      name: 'app',
      component: () => import('../App.vue'),
    },
    {
      path: '/elText',
      name: "elText测试",
      component: () => import('../views/elText.vue')
    },
    {
      path: '/Parent',
      name: "Parent",
      component: () => import('../views/Parent.vue')
    },
    {
      path: '/Child',
      name: "Child",
      component: () => import('../views/Child.vue')
    },
    {
      path: '/watch1',
      name: "watch1",
      component: () => import('../views/watch1.vue')
    },
    {
      path: '/loveTalk',
      name: "loveTalk",
      component: () => import('../components/LoveTalk.vue')
    },
    {
      path: '/father',
      name: "father",
      component: () => import('../components/father.vue')
    },
    {
      path: '/buttooon',
      name: "buttooon",
      component: () => import('../components/elementUI/button.vue')
    },
    {
      path: '/DateTimePicker',
      name: "DateTimePicker",
      component: () => import('../components/elementUI/DateTimePicker.vue')
    }
    ,
    {
      path: '/Table',
      name: "Table",
      component: () => import('../components/elementUI/Table.vue')
    }
    ,
    {
      path: '/A',
      name: "A",
      component: () => import('@/components/pinia/A.vue')
    }
    ,
    {
      path: '/B',
      name: "B",
      component: () => import('@/components/pinia/B.vue')
    }
  ]
})

export default router
