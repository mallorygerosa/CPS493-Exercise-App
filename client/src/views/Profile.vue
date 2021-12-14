<template>
  <div class="profile">
    <h1 class="title is-2 has-text-centered">Profile</h1>
    <div class="container">
      <div class="card card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <figure class="image is-inline-block">
              <img class="is-rounded is-128x128" :src="pic" alt="User avatar" />
            </figure>
            <p class="title is-3">
              {{ name }}
            </p>
            <p class="subtitle is-4">{{ handle }} <br /></p>

            <p class="title is-5">Email(s): {{ emails.toString() }}</p>

            <router-link
              to="EditProfile"
              class="button is-success is-medium"
              style="is-right"
            >
              Edit Profile
            </router-link>

            <p class="title is-3">
              <br />
              {{ Session.user.following.length }} Friend(s)
            </p>
            <FriendList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Session from "../services/session";
import { GetByHandle } from "../services/users";
import FriendList from "../components/FriendList.vue";

export default {
  data: () => ({
    user: {
      firstName: null,
      lastName: null,
      handle: null,
      emails: [],
      following: [],
      pic: "https://bulma.io/images/placeholders/128x128.png",
    },
    Session,
  }),
  components: {
    FriendList,
  },
  computed: {
    name() {
      return Session.user.firstName + " " + Session.user.lastName;
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
    following() {
      return Session.user.following;
    },
    friends() {
      return this.friendList.toString();
    },
  },

  async mounted() {
    for (var i = 0; i < Session.user.following.length; i++) {
      this.friendList.push(
        await GetByHandle(Session.user.following[i].handle).firstName
      );
    }
  },
};
</script>