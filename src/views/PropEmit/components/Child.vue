<template>
  <div>
    <p>{{ data }}</p>
    <button @click="emit">emit</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    data: String,
  },
  setup(props, context) {
    const childData = ref('子组件数据')

    const emit = () => {
      context.emit('childBtnClick', childData.value)
    }

    return { emit }
  }
}
</script>

<style>

</style>