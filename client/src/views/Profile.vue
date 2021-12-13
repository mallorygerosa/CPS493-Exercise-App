<template>
  <div class="profile">
    <h1 class="title has-text-centered">Profile</h1>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <figure class="image is-128x128 is-inline-block">
                <img
                  class="is-rounded center"
                  src="{{ pic }}"
                  alt="User avatar"
                />
              </figure>
              <p class="title is-3">
                {{ name }}
              </p>
              <p class="subtitle is-4">{{ handle }} <br /></p>

              <router-link
                to="EditProfile"
                class="button is-success"
                style="is-centered"
              >
                Edit Profile
              </router-link>

              <p class="title is-5">Emails: {{ toString(emails) }} </p>
              <!-- <div class="email" v-for="(e) in user.emails" :key="e.email">
              </div> -->

              <p class="title is-5">Friends:</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      handle: null,
      emails: [],
      pic: "https://bulma.io/images/placeholders/128x128.png",
    },
    Session,
  }),

  computed: {
    name() {
      return this.Session.user.firstName + " " + this.Session.user.lastName;
    },
    handle() {
      return Session.user.handle;
    },
    pic() {
      return Session.user.pic;
    },
    emails() {
      return Session.user.emails;
    },
  },
};
</script>