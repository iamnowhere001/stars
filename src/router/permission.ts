import router from '@/router'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  debugger
  NProgress.start()

  // 如果已经登录，并准备进入 Login 页面，则重定向到主页
  if (to.path === '/login') {
    return next({ path: '/' })
  }

  try {
    return next()
  } catch (err: any) {
    ElMessage.error(err.message || '路由守卫过程发生错误')
    next('/login')
  }
})

router.afterEach(() => {
  NProgress.done()
})
