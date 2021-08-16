<template>
  <div>
    <h1>{{ data }}</h1>
    <button @click="btnClick">emit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: String,
    default: 'default',
  },
})

// 在 script 中需要 props[key] 引用，而 template 中可直接调用 key
console.log(props.data)

// 通过 defineEmits 指定当前组件含有的触发事件
const emit = defineEmits(['childBtnClick'])

const childData = ref('子组件数据')

const btnClick = () => {
  // 事件通过 defineEmits 返回的上下文 emit 进行触发
  emit('childBtnClick', childData.value)
}
</script>

<style>

</style>