<template>
  <div class="columns is-multiline">
    <div class="column is-one-half">
      <article class="media" v-for="u in friendList" :key="u.handle">
        <div class="media-left">
          <figure class="image is-96x96">
            <img class="is-rounded" :src="u.pic" :alt="u.handle" />
          </figure>
        </div>

        <div class="media-content">
          <p class="title is-3 has-text-left">
            {{ u.firstName + " " + u.lastName }}
          </p>
          <p class="subtitle is-4 has-text-left">{{ u.handle }}</p>
          <p class="subtitle is-5 has-text-left">{{ u.emails.toString() }}</p>
        </div>
        <div class="media-right has-text-right subtitle is-6">
          <a>View Profile </a>
          <br />
          <a>Remove Friend</a>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import Session from "../services/session";
import { GetByHandle } from "../services/users";

export default {
  data() {
    return {
      list: [],
      friendList: [],
      Session,
    };
  },

  async mounted() {
    this.list = await GetByHandle(Session.user.handle);
    for (var i = 0; i < this.list.following.length; i++) {
      this.friendList.push(await GetByHandle(this.list.following[i].handle));
    }
  },
};
</script>