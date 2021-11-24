<!-- May or may not use-->
<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="card-content">
      <div class="content">

        <div class="field">
          <label class="label">Change Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="New username"
            />
          </div>
          <!-- Need to add checking mechanism -->
          <p class="help is-success">Username is available</p>
          <p class="help is-failure">Username is not available</p>
        </div>

        <div class="field">
          <label class="label">Change email</label>
          <div class="control">
            <input
              class="input is-success"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          
          <!-- Need to add checking mechanism -->
          <!-- <p class="help is-success">Email is available</p>
          <p class="help is-danger">Not a valid email</p> -->
        </div>

        <div class="field">
          <label class="label">Change Password</label>
          <div class="control">
            <input
              class="input"
              type="New password"
              placeholder="********"
              required
            />
          </div>
          <!-- Need to add checking mechanism -->
          <!-- <p class="help is-danger">Password must have 8 or more characters</p> -->
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
        <!-- <div class="field">
            <label class="label">Edit profile picture</label>
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
export default {
  props: {
    newUser: Object,
  },
  data() {
    return {
      user: this.newUser,
    };
  },
  watch: {
    newUser() {
      this.user = this.newUser;
    },
  },
};
</script>

<style>
</style>