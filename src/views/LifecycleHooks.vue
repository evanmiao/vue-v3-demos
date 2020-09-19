<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="update">update</button>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'

export default {
  setup() {
    // 因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。
    // 换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。
    onBeforeMount(() => console.log('Component is before mount!'))
    onMounted(() => console.log('Component is mounted!'))
    onBeforeUpdate(() => console.log('Component is before update!'))
    onUpdated(() => console.log('Component is updated!'))
    onBeforeUnmount(() => console.log('Component is before unmount!'))
    onUnmounted(() => console.log('Component is unmounted!'))
    onErrorCaptured(() => console.log('Component is error captured!'))
    onRenderTracked(() => console.log('Component is render tracked!'))
    onRenderTriggered(() => console.log('Component is render triggered!'))

    const msg = ref('Hello, Vue 3!')
    const update = () => msg.value = 'Lifecycle Hooks'

    return { msg, update }
  }
}
</script>

<style>

</style>