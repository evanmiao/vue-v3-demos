<template>
  <ul id="nav">
    <li v-for="(item, index) in links" :key="index" >
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
import router from '../router'

export default {
  setup() {
    const routes = router.getRoutes()
    const links = []

    routes.forEach(route => {
      // 不包含二级路由、通配符路由
      if (route.path.includes('/', 1) || route.path === '/:catchAll(.*)') return
      links.push({
        name: route.name,
        link: route.path
      })
    })

    return { links }
  }
}
</script>

<style>
#nav {
  position: fixed;
  list-style-type: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
