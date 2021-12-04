<template>
  <div class="header">
    <h1 class="title is-1 has-text-centered" style="margin: 15px 0px 0px 0px">
      <strong>Community Fitness</strong>
    </h1>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link is-tab to="/" exact>
          <img
            src="../assets/logo.png"
            alt="Logo"
            style="width: 130px; height: 50px"
          />
        </router-link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start" style="font-size: 20px">
          <router-link class="navbar-item" is-tab to="/" exact>
            Home
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" is-tab to="/Feed">
              Activity Feed
            </router-link>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/PersonalFeed">
                Personal Feed
              </router-link>
              <router-link class="navbar-item" to="/Feed">
                Friend Feed
              </router-link>              
              <router-link class="navbar-item" to="/CommunityFeed">
                Community Feed
              </router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link class="navbar-link" is-tab to="/Friends">
              Community
            </router-link>

            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/Friends"> View Friends </router-link>
              <!-- <router-link class="navbar-item" to="/AddFriend"> Add Friend </router-link> -->
              <router-link class="navbar-item" to="/Users">
                View All Users
              </router-link>
            </div>
          </div>

          <router-link class="navbar-item" is-tab to="/about">
            About
          </router-link>

          <router-link class="navbar-item" is-tab to="/profile">
            Profile
          </router-link>

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
