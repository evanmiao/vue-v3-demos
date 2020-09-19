<template>
  <div>
    <div ref="root" style="height:100px;background:#42b983;"></div>
    <input type="range" v-model="width">
  </div>
</template>
<script>
import { ref, watch, onMounted } from 'vue'

export default {
  setup() {
    // 定义空 ref 作为 Template ref 操作 dom
    const root = ref(null)
    const width = ref(100)

    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log(root.value)
    })

    // 监听拖动
    watch(width, (val, oldVal) => {
      root.value.style.width = width.value + "vw"
    })

    return { root, width }
  }
}
</script>

<style>

</style>