<template>
  <Child :data="parentData" @childBtnClick="childBtnClick"></Child>
</template>

<script>
import { ref } from 'vue'
import Child from './components/Child'

export default {
  components: { Child },
  setup() {
    const parentData = ref('父组件数据')

    const childBtnClick = childData => {
      parentData.value = childData
    }

    return { parentData, childBtnClick }
  }
}
</script>

<style>

</style>