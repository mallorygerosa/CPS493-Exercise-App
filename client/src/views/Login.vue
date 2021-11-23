<template>
  <div class="container">
    <p class="title is-1 has-text-centered">Log In</p>
    <div class="columns is-centered">
      <form class="box" @submit.prevent="login()">
        <div class="field">
          <label class="label">Username</label>
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="@User"
              v-model="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <div class="buttons is-grouped is-centered">
            <p class="control">
              <button class="button is-success" type="submit">Login</button>
            </p>
            <p class="control">
              <button
                class="button is-success"
                type="button"
                @click="loginGoogle">
                Login with Google
              </button>
            </p>
          </div>
        </div>
        <router-link to="./Register">
          <button class="button is-light">
            <p class="has-text-centered">Don't have an account? Sign up!</p>
          </button>
        </router-link>
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
// let auth;
// // global gapi
// const tag = document.createElement('script');
// tag.id="google-auth-script";
// tag.src="https://apis.google.com/js/platform.js";

// document.head.append(tag);

// tag.onload = () => {
//     gapi.load('auth2', function() {
//         gapi.auth2.init({
//             client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
//         }).then()

// }).then(        x=> {
//             const auth = gapi.auth2.getAuthInstance();
//             auth.signIn().then(x=> console.log({x})))
// });
// }
</script>

<style>
</style>