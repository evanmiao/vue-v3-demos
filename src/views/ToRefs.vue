<template>
  <div>
    <h1>count: {{ count }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const data = reactive({
      count: 0
    })

    const add = () => {
      data.count++
    }

    // 无法解构 reactive() 对象，每次都通过 . 操作符访问对象属性是非常麻烦的
    // 官方提供了 toRefs() 函数用来包装 reactive() 对象，这样就可以解构了
    return { ...toRefs(data), add }
  }
}
</script>

<style>

</style>