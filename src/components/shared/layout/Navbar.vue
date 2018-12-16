<template>
  <b-container fluid id="nav">
    <b-row>
      <b-col cols="3" class="nav-col d-flex align-items-center">
        <img class="logo-nav" src="../../../assets/img/artcar-logo.png" alt>
      </b-col>
      <b-col
        offset="6"
        cols="3"
        offset-lg="5"
        lg="4"
        class="nav-col d-flex justify-content-around align-items-center"
      >
        <router-link :to="{name: 'home'}" class="link-1 link-desk">Home</router-link>
        <router-link :to="{name: 'veiculos'}" class="link-1 link-desk">Veiculos</router-link>
        <router-link :to="{name: 'contato'}" class="link-1 link-desk">Contato</router-link>
        <a class="link-mb">
          <font-awesome-icon icon="bars" class="color-1" style="font-size:2.5em;"/>
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
      window.scrollY > 200 ? 
        document.getElementById('nav').classList.add('bg-color-2') :
        document.getElementById('nav').classList.remove('bg-color-2')
    }
  }
};
</script>

