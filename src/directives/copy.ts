import type { Directive, DirectiveBinding } from 'vue'

// 监听点击，复制文本
export const copy: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', () => {
      const input = document.createElement('input')
      input.value = binding.value
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
    })
  }
}
