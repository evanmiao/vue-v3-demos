<template>
  <div>
    <h1>count: {{ count }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    // ref() 创建响应式数据
    const count = ref(0)

    const add = () => {
      // 注意：通过 ref() 封装的数据必须通过 .value 才能访问到里面的值
      count.value++
    }

    return { count, add }
  }
}
</script>

<style>

</style>