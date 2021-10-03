<template>
  <div class="container">
    <Header> </Header>
    <Navbar> </Navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script> 
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Header,
    Navbar
  }
}
</script>
