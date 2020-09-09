<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  // setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
  setup() {
    const msg = 'Hello, Vue 3!'
    // setup 最后返回所有的对象和方法，注意这里的 msg 不是响应式对象
    return { msg }
  }
}
</script>

<style>

</style>