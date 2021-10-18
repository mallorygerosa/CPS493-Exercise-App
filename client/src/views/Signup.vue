<template>
  <div class="container">
    <div class="columns is-centered">
      <form class="box" style="margin-top: 30px">
        <p class="title is-1 has-text-centered">Sign Up</p>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="User"
              required
            />
            <!-- <span class="icon is-small is-left">
              <i href="" class="fas fa-envelope"></i>
            </span> -->
          </div>
        </div>

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="John Goblikon"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input is-success"
              type="email"
              placeholder="user@example.com"
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="**********"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="buttons is-grouped is-centered">
            <button class="button is-success">Sign Up</button>
            <a class="button is-light" href="./">Cancel</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
export default {
  data: () => {
    return {
      Session,
    };
  },
  methods: {
    signup() {
      //   this.Session.Signup(this.email, this.password);
    },
  },
};
</script>