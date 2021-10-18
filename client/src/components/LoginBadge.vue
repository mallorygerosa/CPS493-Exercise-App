<template>
  <div class="buttons" v-if="!Session.user">
    <a class="button is-success" @click="signup">
      <strong>Sign up</strong>
    </a>
    <a class="button is-light" @click="login"> Log in </a>
  </div>
  <div v-else>
    <button class="button is-white">Hello {{ name }}</button>

    <button class="button is-success" @click="logout">Log out</button>
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
      //this.Session.Login();
    },
    signup() {
      this.$router.push("/signup");
    },
    logout() {
      this.user = null;
    },
  },
  computed: {
    name() {
      return this.Session.user.FirstName + " " + this.Session.user.LastName;
    },
  },
};
</script>