<template>
  <div class="container">
    <Header> </Header>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script> 
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  }
}
</script>
