<template>
  <div>
    <h1>count: {{ count }}, double: {{ double }}</h1>
    <p><button @click="add">add</button></p>
    <p><button @click="stop">stop total watcher</button></p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const data = reactive({
      double: computed(() => count.value * 2)
    })

    // 数据源可以是 ref
    watch(count, (val, oldVal) => console.log('count:', val))

    // 也可以是一个拥有返回值的 getter 函数
    watch(() => data.double, (val, oldVal) => console.log('double:', val))

    // 也可以使用数组来同时侦听多个源
    const stop = watch(  // 停止侦听, onInvalidata 等 与 watchEffect 行为一致
      [count, () => data.double],
      ([count, double], [oldCount, oldDouble]) => {
        console.log('total:', count, double)
      }
    )

    const add = () => {
      count.value++
    }

    return { count, ...toRefs(data), add, stop }
  }
}
</script>

<style>

</style>