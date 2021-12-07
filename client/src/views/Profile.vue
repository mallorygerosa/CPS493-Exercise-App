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
                  src="{{user.pic}}"
                  alt="User avatar"
                />
              </figure>
              <p class="title is-3">
                {{ user.firstName + " " + user.lastName }}
              </p>
              <p class="subtitle is-4">{{ user.handle }}</p>

              <router-link
                to="EditProfile"
                class="button is-success"
                style="is-centered"
              >
                Edit Profile
              </router-link>

              <p class="title is-5">Emails: {{ user.emails }}</p>
              <div class="email" v-for="(e, i) in user.emails" :key="e.email">
                <email :email="e" @remove="remove(e, i)" />
              </div>

              <p class="title is-5">Friends:</p>
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

export default {
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      handle: null,
      emails: null,
      following: [],
      pic: "https://bulma.io/images/placeholders/128x128.png",
    },
    Session,
  }),
};
</script>