<template>
  <div class="friends">
    <div class="container has-text-centered">
      <h1 class="title is-2">Friends</h1>
      <h1 class="subtitle">
        View your friends profiles and find new people to connect with!
      </h1>

      <router-link to="AddFriend" class="button is-success">
        Add Friend
      </router-link>
    </div>
    <div class="card card-content">
      <FriendList />
    </div>
  </div>
</template>
<script>
import Session from "../services/session";
import { GetByHandle } from "../services/users";
import FriendList from "../components/FriendList.vue";

export default {
  data() {
    return {
      list: [],
      friendList: [],
      Session,
    };
  },
  components: {
    FriendList,
  },

  async mounted() {
    this.list = await GetByHandle(Session.user.handle);
    for (var i = 0; i < this.list.following.length; i++) {
      this.friendList.push(await GetByHandle(this.list.following[i].handle));
    }
  },
};
</script>