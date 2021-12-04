<template>
  <div class="profile">
    <h1 class="subtitle is-2 has-text-centered">Profile</h1>
    <div class="container">
      <br />
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <figure class="image is-128x128 is-inline-block">
                <img
                  class="is-rounded center"
                  src="{{user.pic}}"
                  alt="User avatar"
                />
              </figure>
              <p class="title is-3">
                {{ user.firstName + " " + user.lastName }}
              </p>
              <p class="subtitle is-4">{{ user.handle }}</p>
              <router-link is-tab to="/EditProfile">
                <button class="button is-primary">Edit Profile</button>
              </router-link>
              <p class="title is-6">Emails: {{ user.emails }}</p>
              <div
                class="email"
                v-for="(e, i) in user.emails"
                :key="e.email"
              >
                <email :email="e" @remove="remove(e, i)" />
              </div>

              <p class="title is-6">Friends:</p>
              <div
                class="friend"
                v-for="(f, i) in user.following"
                :key="f.handle"
              >
                <friend :friend="f" @remove="remove(f, i)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
// import EditProfile from "../components/EditProfile.vue";

export default {
  components: {
    // EditProfile,
  },
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      handle: null,
      emails: null,
      following: null,
      pic: "https://bulma.io/images/placeholders/128x128.png",
    },
    Session,
  }),
};
</script>