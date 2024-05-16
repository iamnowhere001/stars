import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const Layout = () => import('@/layout/index.vue')

/**
 * 定义常量路由
 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ':path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/hook-demo',
    component: Layout,
    redirect: '/hook-demo/use-fetch-select',
    name: 'HookDemo',
    meta: {
      title: 'Hook',
      elIcon: 'Menu',
      alwaysShow: true
    },
    children: [
      {
        path: 'use-fetch-select',
        component: () => import('@/views/hook-demo/use-fetch-select.vue'),
        name: 'UseFetchSelect',
        meta: {
          title: 'useFetchSelect'
        }
      },
      {
        path: 'use-fullscreen-loading',
        component: () => import('@/views/hook-demo/use-fullscreen-loading.vue'),
        name: 'UseFullscreenLoading',
        meta: {
          title: 'useFullscreenLoading'
        }
      },
      {
        path: 'use-watermark',
        component: () => import('@/views/hook-demo/use-watermark.vue'),
        name: 'UseWatermark',
        meta: {
          title: 'useWatermark'
        }
      }
    ]
  }
]

export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    meta: {
      title: '权限',
      svgIcon: 'lock',
      roles: ['admin', 'editor'],
      alwaysShow: true
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page.vue'),
        name: 'PagePermission',
        meta: {
          title: '页面级',
          roles: ['admin'] // 或者在子导航中设置角色
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive.vue'),
        name: 'DirectivePermission',
        meta: {
          title: '按钮级' // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

// [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (About.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import('@/views/AboutView.vue')
//   },
//   {
//     path: '/demo',
//     name: 'demo',
//     component: () => import('../views/Demo.vue')
//   }
// ]

export default router
