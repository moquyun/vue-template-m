import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Layout = (resolve: any) => require(['@/views/layout'], resolve)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: {
          title: '首页',
          noCache: true
        }
      },
      {
        path: '/videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "home" */ '@/views/videos/index.vue'),
        meta: {
          title: '电影',
          noCache: true
        }
      },
      {
        path: '/like',
        name: 'like',
        component: () => import(/* webpackChunkName: "home" */ '@/views/like/index.vue'),
        meta: {
          title: '喜欢',
          noCache: true
        }
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import(/* webpackChunkName: "home" */ '@/views/setting/index.vue'),
        meta: {
          title: '设置',
          noCache: true
        }
      }
    ]
  }
  // {
  //   path: '/video',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/videos',
  //       name: 'videos',
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/videos/index.vue'),
  //       meta: {
  //         title: 'videos',
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/like',
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/like',
  //       name: 'like',
  //       component: () => import(/* webpackChunkName: "home" */ '@/views/like/index.vue'),
  //       meta: {
  //         title: 'like',
  //         noCache: true
  //       }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
