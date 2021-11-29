<template>
  <div class="profile">
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
              <p class="title is-6">{{ user.emails }}</p>
              <!-- <p>This is placeholder text for this user's "about me" information</p> -->
              <router-link is-tab to="/EditProfile">
                <button class="button is-primary">Edit Profile</button>
              </router-link>
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
      email: null,
      pic: null,
    },
    Session,
  }),
};
</script>