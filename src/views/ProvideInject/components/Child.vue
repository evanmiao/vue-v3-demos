<template>
  <h1 :style="{ color }">provide inject</h1>
</template>

<script>
import { ref, inject, watchEffect } from 'vue'

export default {
  setup() {
    const color = inject('color', ref('red') /* 可选 默认值 */)

    watchEffect(() => console.log(`color set to: ${color.value}`))

    return { color }
  }
}
</script>

<style>

</style>