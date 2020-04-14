<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1>Select a product to make it customizable</h1>
          <button type="button" class="btn-close" v-on:click="$emit('close')"><i class="fas fa-times"></i></button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <span class="inputContainer">
            <input class="searchInput" type="text" v-model="searchString" placeholder="Enter your search terms" />
            <i class="fas fa-search"></i>
          </span>

          <ul>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit"
              class="productsContainer">
              <li v-for="photo in filteredResources" :key="photo.id">
                <router-link :to="{name:'product', params:{id: photo.id, title: photo.title}}"
                  v-on:click.native="$emit('close')">

                  <img :src="photo.url" height="200" />
                  <p class="titleDescription">{{photo.title}}</p>

                </router-link>
              </li>
            </div>
          </ul>
        </slot>
      </section>

    </div>
  </div>
</template>

<script>
  import axios from "axios";
  //import router from "../router"
  export default {
    name: 'Modal',
    data() {
      return {
        photos: [],
        results: [],
        busy: false,
        limit: 10,
        searchString: ""
      }
    },
    methods: {
      loadMore() {
        this.busy = true;
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {

          const append = res.data.slice(this.photos.length, this.photos.length + this.limit)
          this.photos = this.photos.concat(append);
          this.busy = false;
        }).catch(function (error) {
          console.log(error);
          this.busy = false;
        });
      }
    },
    mounted() {
      this.loadMore();
    },
    computed: {
      filteredResources() {
        //this.searchString='';           
        if (!this.searchString) return this.photos;
        return this.photos.filter(photo => {
          return photo.title.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1
        })
      }
    }
  };
</script>