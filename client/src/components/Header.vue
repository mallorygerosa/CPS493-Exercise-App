<template>
  <div class="header">
    <h1 class="title is-1 has-text-centered" style="margin: 15px 0px 0px 0px">
      <strong>Fitness Tracker</strong>
    </h1>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/">
          <img
            src="../assets/logo.png"
            alt="Logo"
            style="width: 130px; height: 50px"
          />
        </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
      </div>

  <div class="navbar-menu " :class="{'is-active': isActive }">
        <div class="navbar-start" style="font-size: 20px">
          <router-link class="navbar-item" is-tab to="/" exact> Home </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" is-tab to="/Feed"> Activity Feed </router-link>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/Feed"> Personal Activity </router-link>
              <router-link class="navbar-item" to="/Feed"> Community Activity </router-link>
              <router-link class="navbar-item" to="/Feed"> Add Activity </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" is-tab to="/Friends"> Friends </router-link>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/Friends"> Friend List </router-link>
              <router-link class="navbar-item" to="/AddFriend"> Add Friend </router-link>
            </div>
          </div>
          <router-link class="navbar-item" is-tab to="/Profile"> Profile </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <LoginBadge />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import LoginBadge from "./LoginBadge";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    LoginBadge,
  },
};
</script>
