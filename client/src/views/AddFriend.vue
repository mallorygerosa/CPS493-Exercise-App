<template>
  <div class="addfriend">
    <div class="columns is-centered">
      <form class="box" style="margin-top: 30px" @submit.prevent="login()">
        <p class="title is-1 has-text-centered">Add Friend</p>

        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input
              class="input is-success"
              type="text"
              placeholder="User"
              required
            />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <div class="buttons is-grouped is-centered">
              <button class="button is-success">Add</button>
              <router-link class="button is-light" to="./Friends">Cancel</router-link>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
    methods: {

    // async addFriend() {
    //   const response = await follow(newFriend, user);
    //   if (response) {
    //     this.$oruga.notification.open({
    //       message: "Successfully submitted friend request",
    //       variant: "info",
    //       position: "top",
    //       closable: true,
    //     });
    //     router.push("/Friends");
    //   }
    // },
    
  },

}
</script>

<style>

</style>