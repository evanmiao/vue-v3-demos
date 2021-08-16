<template>
  <Child :data="parentData" @childBtnClick="handleClick"></Child>
</template>

<script setup>
import { ref } from 'vue'
// 在 script setup 中导入的组件可以直接在 template 中使用
import Child from './components/Child.vue'

// 在 script setup 中定义的所有变量都会自动导出
const parentData = ref('父组件数据')

const handleClick = childData => {
  parentData.value = childData
}
</script>

<style>

</style>