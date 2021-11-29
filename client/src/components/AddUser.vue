<template>
  <!-- <form class="card" @submit.prevent="$emit('add')">
    <div class="container"> -->

  <div class="container">
    <div class="columns is-centered">
      <form class="box" @submit.prevent="$emit('add')">

      <div class="field" style="text-align: left">
        <label class="label">First Name</label>
        <input
          class="input"
          type="text"
          placeholder="John"
          v-model="user.firstName"
          required
        />
      </div>

      <div class="field" style="text-align: left">
        <label class="label">Last Name</label>
        <input
          class="input"
          type="text"
          placeholder="Smith"
          v-model="user.lastName"
          required
        />
      </div>

      <div class="field" style="text-align: left">
        <label class="label">Username</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="text"
            placeholder="@Username"
            v-model="user.handle"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </p>
      </div>

      <div class="field" style="text-align: left">
        <label class="label">Password</label>
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="********"
            v-model="user.password"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div class="field" style="text-align: left">
        <label class="label">Profile Picture</label>
        <p class="control">
          <input
            class="input"
            type="url"
            placeholder="https://URL.com"
            v-model="user.pic"
            required
          />
        </p>
      </div>

      <div class="field" style="text-align: left">
        <label class="label">Email</label>
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="email@example.com"
            v-model="user.email"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div class="buttons is-grouped is-centered" id="buttons">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <button class="button is-primary is-light" type="reset">Cancel</button>
        </div>
      </div>
    
  </form>
  </div>
  </div>
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