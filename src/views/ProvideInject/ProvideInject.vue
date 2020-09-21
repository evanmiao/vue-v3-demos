<template>
  <div>
    <Child></Child>
    <button @click="change">change color</button>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import Child from './components/Child'

export default {
  components: { Child },
  setup() {
    const colorRef = ref('#42b983')

    provide('color', colorRef)

    const change = () => {
      colorRef.value = colorRef.value === "#2c3e50" ? "#42b983" : "#2c3e50";
    }

    return { change }
  }
}
</script>

<style>

</style>