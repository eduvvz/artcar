<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-foot></app-foot>
  </div>
</template>

<script>
import nav from './components/shared/layout/Navbar.vue'
import footer from './components/shared/layout/Footer.vue'

export default {
  components: {
    'app-nav': nav,
    'app-foot': footer
  },
};
</script>