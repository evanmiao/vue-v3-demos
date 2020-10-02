<template>
  <div>
    <h2>query: {{ query }}</h2>
    <h2>queryID: {{ queryID }}</h2>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: ['query'],  // 使用 props 将组件和路由解耦
  setup() {
    const route = useRoute()

    // 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
    const queryID = computed(() => route.query.queryID)

    return { queryID }
  }
}
</script>

<style>

</style>