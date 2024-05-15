<script setup lang="ts">
import { ref, computed } from 'vue'

// 待办事项类型声明
interface TodoItem {
  msg: string // 要做的事
  done: boolean // 是否完成
}

// 待办事项输入框
// 类型声明
const todoMsg = ref('')

// 定义待办事项列表
// 类型声明
const todos = ref<TodoItem[]>([
  {
    msg: 'Learn Vue',
    done: true
  },
  {
    msg: 'Learn Vite',
    done: false
  },
  {
    msg: 'Learn Vue Router',
    done: false
  }
])

// 待完成的事件数
// const remaining = computed(() => {
//   return todos.value.filter((todo) => !todo.done).length
// })

// 添加待办事项
const add = () => {
  if (!todoMsg.value) return
  todos.value.push({
    msg: todoMsg.value,
    done: false
  })
  todoMsg.value = ''
}

// 删除待办事项
const deleteItem = (index: number) => {
  todos.value.splice(index, 1)
}

// 清理已完成事件
const clearHasDone = () => {
  todos.value = todos.value.filter((todo) => !todo.done)
}

// 已完成的事件数
const hasDone = computed(() => todos.value.filter((todo) => todo.done).length)

// 全选
const isAllDone = computed({
  get: () => todos.value.every((todo) => todo.done),
  set: (value) => {
    todos.value.forEach((todo) => {
      todo.done = value
    })
  }
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>a todo list demo</p>

    <section>
      <div class="flex-layout">
        <el-input v-model="todoMsg" placeholder="请输入" class="mr-10" />
        <el-button @click="add">添加</el-button>
        <el-button @click="clearHasDone">清理</el-button>
      </div>

      <div v-if="todos.length">
        <div v-for="(todo, index) in todos" :key="todo.msg">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.msg }}</span>
          <span class="ml-10" @click="deleteItem(index)">删除</span>
        </div>
        <div class="mt-10">
          <span>全选</span>
          <input type="checkbox" v-model="isAllDone" />
          <span>{{ hasDone }} / {{ todos.length }}</span>
        </div>
      </div>
      <div v-else>
        <p>No todos, yay!</p>
      </div>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /* display: flex; */
    /* align-items: center; */
  }
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>
