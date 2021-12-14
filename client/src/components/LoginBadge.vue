<template>
  <div class="buttons" v-if="!Session.user">
    <router-link to="./Register">
      <a class="button is-success" @click="register">
        <strong> Sign up </strong>
      </a>
    </router-link>

    <a class="button is-light" @click="login"> Log in </a>
  </div>

  <div v-else>
    <router-link is-tab to="/profile">
      Hello {{ name }}
      <span class="icon is-medium is-left">
        <i class="fas fa-user"></i>
      </span>
    </router-link>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data() {
    return {
      Session,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },

    register() {
      this.$router.push("/register");
    },
  },
  computed: {
    name() {
      return this.Session.user.firstName + " " + this.Session.user.lastName;
    },
  },
};
</script>

<style>
</style>