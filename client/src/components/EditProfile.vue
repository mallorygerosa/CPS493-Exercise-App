<template>
  <form class="card" @submit.prevent="updateProfile()">
    <div class="card-content">
      <div class="content">
        <div class="field">

          <label class="label">Change Profile Picture</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="Picture URL"
              v-model="user.pic"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Change First Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="John"
            v-model="user.firstName"
            />
          </div>

        <div class="field">
          <label class="label">Change Last Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Smith"
            v-model="user.lastName"
            />
          </div>

        <div class="field">
          <label class="label">Change Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="@Username"
            v-model="user.handle"
            />
          </div>
          <!-- Add checking mechanism -->
          <!-- <p class="help is-success">Username is available</p>
          <p class="help is-failure">Username is not available</p> -->
        </div>

        <div class="field">
          <label class="label">Change Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="email@example.com"
              v-model="user.email"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Change Password</label>
          <div class="control">
            <input
              class="input"
              type="New password"
              placeholder="********"
             v-model="user.password"
            />
          </div>
        </div>

        <!-- <div class="field">
          <label class="label">Confirm Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="********"
              required
            />
          </div>
          Need to add checking mechanism
          <p class="help is-danger">Passwords don't match</p>
        </div> -->

      </div>
    </div>
    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="submit">
        Submit
      </button>
      <button class="button is-link is-light card-footer-item" type="reset">
        Cancel
      </button>
    </footer>
  </form>
</template>

<script>
import { Update } from "../services/users";
import Session from "../services/session"
import router from "../router";


export default {
  data: () => ({
    userUpdate: {
      firstName: null,
      lastName: null,
      handle: null,
      pic: null,
    },
  }),

  methods: {
    async updateProfile() {
      const response = await Update(Session.user._id, this.user);
      if (response) {

        this.$oruga.notification.open({
          message: "Successfully updated profile",
          variant: "info",
          position: "top",
          closable: true,
        });
        router.push("/Profile");

      }
    },
  },
};
</script>

<style>
</style>