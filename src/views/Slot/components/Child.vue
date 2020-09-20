<template>
  <div>
    <slot name="title">具名插槽默认值</slot>
    <slot>默认插槽默认值</slot>
    <slot name="content" :data="data">
      <div v-for="(item, index) in data" :key="index">{{ item }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      data: ['one', 'two', 'three']
    }
  }
}
</script>

<style>

</style>