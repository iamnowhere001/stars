# stars

Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# v3-ts-vite

├─ .husky # 用户提交代码时格式化代码
├─ .vscode # 本项目推荐的 vscode 配置和拓展
├─ public
│ ├─ favicon.ico
│ ├─ app-loading.css # 首屏加载 loading
├─ src
│ ├─ api # api 接口
│ ├─ assets # 静态资源
│ ├─ components # 全局组件
│ ├─ config # 全局配置
│ ├─ constants # 常量/枚举
│ ├─ directives # 全局指令
│ ├─ hooks # 全局 hook
│ ├─ icons # svg icon
│ ├─ layouts # 布局
│ ├─ plugins # 全局插件
│ ├─ router # 路由
│ ├─ store # pinia store
│ ├─ styles # 全局样式
│ ├─ utils # 全局公共方法
│ └─ views # 所有页面
│ ├─ App.vue # 入口页面
│ └─ main.ts # 入口文件
├─ tests # 单元测试
├─ types # ts 声明
├─ .env.development # 开发环境
├─ .env.production # 正式环境
├─ .env.staging # 预发布环境
├─ .eslintrc.js # eslint 配置
├─ .prettier.config.js # prettier 配置
├─ tsconfig.json # ts 编译配置
├─ unocss.config.ts # unocss 配置
└─ vite.config.ts # vite 配置
