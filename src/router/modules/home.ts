const Layout = () => import('@/layout/index.vue')

export default {
  path: '/',
  name: 'home',
  component: Layout,
  redirect: '/welcome',
  meta: {
    title: '首页',
    icon: 'home',
    hidden: true
  },
  children: [
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/welcome/index.vue'),
      meta: {
        title: '欢迎页',
        icon: 'home',
        hidden: true
      }
    }
  ]
}
