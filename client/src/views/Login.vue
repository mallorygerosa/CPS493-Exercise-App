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
            <span v-if="errors.length == 2" id="error-message">{{
              errors[0]
            }}</span>
            <span
              v-else-if="errors[0] == 'Username is required'"
              id="error-message"
              >{{ "Username is required" }}</span
            >
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

            <div class="control">
            <button class="button is-success" @click=checkLogin()>
            Login
            </button>
            </div>

            <div class="control">
              <button
                class="button is-success"
                type="button"
                @click="loginGoogle"
              >
                Login with Google
              </button>
            </div>

            <div class="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
          <div class="buttons is-grouped is-centered">
            <button class="button is-light" type="reset">Cancel</button>
          </div>
        </div>
        <router-link to="./Register">
          <p class="subtitle-is-4 has-text-centered">
            Don't have an account? Sign up!
          </p>
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
    errors: [],
    Session,
  }),
  methods: {
    login() {
      this.Session.Login(this.email, this.password);
    },

    loginGoogle() {
      auth.signIn().then((x) => {
        console.log({ x });
      });
    },
    
    checkLogin() {
      if (this.email && this.password) {
        return true;
      }
      this.errors = [];
      if (!this.email) {
        this.errors.push("Username is required");
      }
      if (!this.password) {
        this.errors.push("Password is required");
      }
    },
  },
};

/* global gapi */
let auth;
const tag = document.createElement("script");
tag.id = "google-auth-script";
tag.src = "https://apis.google.com/js/platform.js";
document.head.append(tag);
tag.onload = () => {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      })
      .then()
      .then(() => {
        auth = gapi.auth2.getAuthInstance();
      });
  });
};
</script>

<style>
</style>