<template>
  <div>
    <h1>count: {{ count }}, double: {{ double }}</h1>
    <h2>half: <input type="number" v-model="half"></h2>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
    const double = computed(() => count.value * 2)

    // 或者传入一个拥有 get 和 set 函数的对象，创建一个可手动修改的计算状态。
    const half = computed({
      get: () => count.value / 2,
      set: val => count.value = val * 2
    })

    const add = () => {
      count.value++
    }

    return { count, double, half, add }
  }
}
</script>

<style>

</style>