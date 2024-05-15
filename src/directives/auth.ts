import type { Directive, DirectiveBinding } from 'vue'

// 权限指令
export const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    if (!value) {
      return
    }

    const auths = value.split(',')
    const isAuth = auths.some((auth: string) => {
      return auth === 'admin'
    })
    if (!isAuth) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
