<template>
  <form class="card" @submit.prevent="submit()">
    <div class="card-content">
      <div class="content">
        
        <div class="field">
          <label class="label">Change Profile Picture</label>
          <div class="control">
            <input
              class="input"
              type="url"
              placeholder="Picture URL"
              v-model="updatedUser.pic"
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
            v-model="updatedUser.firstName"
            />
          </div>

        <div class="field">
          <label class="label">Change Last Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Smith"
            v-model="updatedUser.lastName"
            />
          </div>

        <div class="field">
          <label class="label">Change Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="@Username"
            v-model="updatedUser.handle"
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
              v-model="updatedUser.email"
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
             v-model="updatedUser.password"
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
      </div>
    </div>
    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="submit">
        Submit
      </button>
      <router-link to="Profile" class="button is-link is-light card-footer-item">
        Cancel
      </router-link>
    </footer>
  </form>

</template>

<script>
import { Update } from "../services/users";
import Session from "../services/session";
import router from "../router";

export default {
  data: () => ({
    updatedUser: {
      firstName: Session.user.firstName,
      lastName: Session.user.lastName,
      handle: Session.user.handle,
      pic: Session.user.pic,
    },
  }),

  methods: {
    async submit() {
      const response = await Update(Session.user._id, this.updatedUser);
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