<template>
  <div>
    <Child></Child>
    <button @click="change">change color</button>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import Child from './components/Child.vue'

export default {
  components: { Child },
  setup() {
    const colorRef = ref('#2c3e50')

    provide('color', colorRef)

    const change = () => {
      colorRef.value = colorRef.value === "#42b983" ? "#2c3e50" : "#42b983";
    }

    return { change }
  }
}
</script>

<style>

</style>