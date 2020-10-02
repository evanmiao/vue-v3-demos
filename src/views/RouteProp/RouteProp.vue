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
export default {
  setup() {
    return {
      queryID: 1,
      paramID: 2
    }
  }
}
</script>

<style>

</style>