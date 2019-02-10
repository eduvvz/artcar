<template>
  <b-container fluid id="nav">
    <b-row class="no-margin">
      <b-col cols="3" class="nav-col d-flex align-items-center">
        <img id="logo" class="logo-nav minify" src="../../../assets/img/artcar-logo.png" alt>
      </b-col>
      <b-col
        offset="5"
        cols="3"
        offset-lg="5"
        lg="4"
        class="nav-col d-flex justify-content-around align-items-center"
      >
        <router-link :to="{name: 'home'}" class="link-1 link-desk">Home</router-link>
        <router-link :to="{name: 'veiculos'}" class="link-1 link-desk">Veiculos</router-link>
        <router-link :to="{name: 'contato'}" class="link-1 link-desk">Contato</router-link>
        <a class="link-mb">
          <font-awesome-icon id="menu-btn" icon="bars" class="color-1 minify"/>
        </a>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if ( window.scrollY > 100) {
        document.getElementById('nav').classList.add('bg-color-3') 
        document.getElementById('logo').classList.remove('minify')
        document.getElementById('menu-btn').classList.remove('minify')
      } else {
        document.getElementById('nav').classList.remove('bg-color-3')
        document.getElementById('logo').classList.add('minify')
        document.getElementById('menu-btn').classList.add('minify')
      }
    }
  }
};
</script>

