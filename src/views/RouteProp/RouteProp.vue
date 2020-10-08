<template>
  <div>
    <p>路由传参 prop 解耦</p>
    <router-link :to="{ path: '/routeprop/child1', query: { queryID } }" custom v-slot="{ navigate }">
      <button @click="navigate">Child1</button>
    </router-link>
    <router-link :to="`/routeprop/child2/${ paramID }`" custom v-slot="{ navigate }">
      <button @click="navigate">Child2</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const currentPath = ref(null)

    onActivated(() => {
      if (currentPath.value && currentPath.value != route.fullPath) router.push(currentPath.value)
    })

    onBeforeRouteLeave((to, from, next) => {
      currentPath.value = route.fullPath
      next()
    })

    return {
      queryID: 1,
      paramID: 2
    }
  }
}
</script>

<style>

</style>