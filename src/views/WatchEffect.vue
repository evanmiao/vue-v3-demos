<template>
  <div>
    <h1>count: {{ count }}</h1>
    <p><button @click="add">add</button></p>
    <p><button @click="stop">stop watcher</button></p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // 立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    // 不需要指定监听的属性，它会自动收集依赖。在组件初始化的时候会立即执行一次以收集依赖，而 watch 不需要。
    // 可以显式调用返回值以停止侦听
    const stop = watchEffect(onInvalidate => {
      console.log(count.value),

      // 假设 ID 改变时发一次请求，在请求过程中 ID 发生了多次变化，就会发出多次请求，最后一次返回调数据将会覆盖掉之前的
      // 这不仅会造成资源浪费，还无法保证 watch 回调执行的顺序。
      // onInvalidata(fn) 传入的回调会在 watchEffect 重新运行或 watchEffect 停止时执行
      onInvalidate(id => {
        // id 改变时 或 停止侦听时 取消之前的异步操作
      })
    })

    const add = () => {
      count.value++
    }

    return { count, add, stop }
  }
}
</script>

<style>

</style>