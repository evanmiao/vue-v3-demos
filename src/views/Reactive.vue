<template>
  <div>
    <h1>count: {{ data.count }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    // reactive() 将整个对象包装为响应式数据
    const data = reactive({
      count: 0
    })

    const add = () => {
      data.count++
    }

    // 必须把整个 reactive() 对象返回出去
    // 引用的时候也必须对整个对象进行引用而不能解构
    return { data, add }
  }
}
</script>

<style>

</style>