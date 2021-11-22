<!-- VERY unfinished 
<template>
  <div class="container">
    <div class="columns is-centered">
      <form class="box" style="margin-top: 30px">
        <p class="title is-1 has-text-centered">Sign Up</p>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input>
              class="input is-success"
              type="text"
              placeholder="User"
              required
            </input>
            <span class="icon is-small is-left">
              <i href="" class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">First name</label>
          <div class="control">
            <input>
              class="input is-success"
              type="text"
              placeholder="John Goblikon"
              required
            </input>
          </div>
        </div>

        <div class="field">
          <label class="label">Last name</label>
          <div class="control">
            <input>
              class="input is-success"
              type="text"
              placeholder="Goblikon"
              required
            </input>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input>
              class="input is-success"
              type="email"
              placeholder="user@example.com"
              required
            </input>
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input>
              class="input is-success"
              type="text"
              placeholder="**********"
              required
            </input>
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Confirm password</label>
          <div class="control">
            <input>
              class="input is-success"
              type="text"
              placeholder="**********"
              required
            </input>
          </div>
        </div>
        <div class="field">
          <div class="buttons is-grouped is-centered">
            <router-link class="button is-success" to="/Profile">Sign up</router-link>
            <router-link class="button is-light" href="./">Cancel</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import { GetByHandle } from '../services/users';

const newUser = ()=> ({ 
user: Session.user, user_handle: Session.user.handle user_email: Session.user.email })


export default {
  data: () => ({
    email: null,
    password: null,
    handle: null,
    firstName: null,
    lastName: null,
    Session,
  }),
  methods: {
    checkUsername() {
      if ( !GetByHandle(this.handle)){
      return true;
      } else {return false}
    },
    checkPassword() {

    },
    checkEmail() {
      
    },
    register() {
      if (register() && checkEmail() && checkPassword())
      this.Session.login(this.email, this.password)
    }
  },
};
</script>
-->