<template>
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a movie">
      <o-autocomplete
        :data="data"
        placeholder="@User"
        field="friend"
        :loading="isFetching"
        check-infinite-scroll
        :debounce-typing="500"
        @typing="getAsyncData"
        @select="option => selected = option"
        @infinite-scroll="getMoreAsyncData"
      >
        <template slot-scope="props">
          <div class="media">
            <!-- <div class="media-left">
              <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`" />
            </div> -->
            <div class="media-content">
              {{ props.option.friend }}
              <br />
              <!-- <small> Released at {{ props.option.release_date }}, rated <b>{{ props.option.vote_average }}</b> </small> -->
            </div>
          </div>
        </template>
        <!-- <template slot="footer">
          <span v-show="page > totalPages" class="has-text-grey"> No users found. </span>
        </template> -->
      </o-autocomplete>
    </o-field>
  </section>
</template>

<script>
import {Get} from "../services/session"
import Session from "../services/session"

  export default {
    data() {
      return {
        data: [],
        selected: null,
        isFetching: false,
        name: '',
        page: 1,
        totalPages: 1,
        id: null
      }
    },
    methods: {
      getAsyncData(name) {
          id=Get(Session.user)
        // String update
        if (this.name !== name) {
          this.name = name
          this.data = []
          this.page = 1
          this.totalPages = 1
        }
        // String cleared
        if (!name.length) {
          this.data = []
        //   this.page = 1
        //   this.totalPages = 1
          return
        }
        // Reached last page
        if (this.page > this.totalPages) {
          return
        }
        this.isFetching = true
        // Fetch mongo user from collection by handle
        // fetch(`https://data.mongodb-api.com/app/data-toysb/endpoint/data/beta=${name}&handle=`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}&page=${this.page}`)
          .then(response => response.json())
          .then(data => {
            data.results.forEach(item => this.data.push(item))

            this.page++
            this.totalPages = data.total_pages
          })
          .catch(error => {
            throw error
          })
          .finally(() => {
            this.isFetching = false
          })
      },
      getMoreAsyncData() {
        this.getAsyncData(this.name)
      }
    }
  }
</script>