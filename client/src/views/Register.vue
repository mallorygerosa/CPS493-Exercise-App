<template>
  <!-- <section class="hero is-primary"> -->
    <!-- <div class="hero-body"> -->
      <div class="container">
      <p class="title is-1 has-text-centered">Sign Up</p>

        <div class="columns is-centered" style="margin-top: 40px">
          <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
            <add-user :new-user="user" @add="add()" />
          </div>
        </div>
      </div>
    <!-- </div> -->

  <!-- </section> -->
</template>

<script>
import { Add } from "../services/users";
import AddUser from "../components/AddUser";

export default {
  components: {
    AddUser,
  },
  data() {
    return {
        FIRST: "",
        LAST: "",
        HAND: "",
        PASS:"",
        PIC: "",
        EMAIL: [],
      user: ({
        firstName: null,
        lastName: null,
        handle: null,
        password: null,
        pic: null,
        emails: [],
      }),
    };
  },
  async mounted() {
    this.user.firstName = this.FIRST;
    this.user.lastName = this.LAST;
    this.user.handle = this.USER;
    this.user.password = this.PASS;
    this.user.pic = this.PIC;
    this.user.emails = this.EMAIL;
  },
  methods: {
    async add() {
      const response = await Add(this.user);
      if (response) {
        this.$oruga.notification.open({
          message: "Welcome to Community Fitness",
          variant: "info",
          position: "top",
          closable: true,
        });
      }
    },

  },
};
</script>

<style>
</style>