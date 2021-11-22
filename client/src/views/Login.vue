<template>
  <div class="login">
    <div class="columns is-centered">
      <form class="box" style="margin-top: 30px" @submit.prevent="login()">
        <p class="title is-1 has-text-centered">Log In</p>

      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="email@example.com" v-model="email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <!-- <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span> -->
        </p>
        </div>

        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>

        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>
        
        <!-- Tied to register, unfinished
          <div class="field">
          <div class="control">
            <div class="buttons is-grouped is-centered">
              <router-link class="button is-success" to="/Profile">Log In</router-link>
            </div>
          </div>
        </div> -->

        <!-- <router-link to="./Register">Don't have an account? Sign up!</router-link> -->
      </form>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  data: () => ({
    email: null,
    password: null,
    Session,
  }),
  methods: {
    login() {
      this.Session.Login(this.email, this.password);
    },
  },
};
</script>
