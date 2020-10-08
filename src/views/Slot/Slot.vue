<template>
  <Child>
    <p>默认插槽</p>
    <template v-slot:title>
      <h1>具名插槽</h1>
    </template>
    <template v-slot:content="scope">
      <span v-for="(item, index) in scope.data" :key="index">{{ item }} / </span>
    </template>
  </Child>
</template>

<script>
import Child from './components/Child.vue'

export default {
  components: { Child }
}
</script>

<style>

</style>