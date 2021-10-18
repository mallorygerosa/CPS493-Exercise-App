<template>
  <div class="container">
    <div class="columns is-centered">
      <form class="box" style="margin-top: 30px" @submit.prevent="login()">
        <p class="title is-1 has-text-centered">Log In</p>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="User"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input is-success"
              type="password"
              placeholder="**********"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <div class="buttons is-grouped is-centered">
              <button class="button is-success">Log In</button>
              <router-link class="button is-light" to="./">Cancel</router-link>
            </div>
          </div>
        </div>

        <router-link to="./Signup">Don't have an account? Sign up!</router-link>
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
