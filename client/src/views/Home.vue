<template>
  <section class="hero is-success is-fullheight">
    <div
      class="hero-head has-text-centered"
      style="margin: 0px 120px -50px 120px"
    >
      <section class="section">
        <h1 class="title is-1">
          <strong>Welcome,</strong> <br />
          To Your Own Personalized Community Activity Hub
        </h1>
        <h2 class="subtitle is-3">
          Connect with your community, your friends, and yourself, all in one place. 
        </h2>
        <router-link to="/Feed">
          <button class="button is-primary is-light">Get Started</button>
        </router-link>
      </section>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
