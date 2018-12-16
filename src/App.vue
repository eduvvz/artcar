<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import nav from './components/shared/layout/Navbar.vue'

export default {
  components: {
    'app-nav': nav
  },
};
</script>