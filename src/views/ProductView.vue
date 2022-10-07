<template>
  <div class="">
      <div class="container">
        <div class="row g-3 mb-5">
          <div class="col-12">
            <div class="my-5">
              <h1 class="text-center">LIST OF POSTS</h1>
            </div>
          </div>
          <div class="col-lg-4" v-for="post in store.state.posts" :key="post.id">
            <div class="card text-start">
              <div class="card-body">
                <router-link :to="{name: 'post-detail', params: { id: post.id }}" class="text-decoration-none">
                  <h4 class="text-truncate">
                    {{ post.title }}
                  </h4>
                </router-link>
                <div class="mt-3 mb-4">
                  <span class="text-primary" v-for="tag in post.tags">
                    # {{ tag }}
                  </span>
                </div>
                <p class="">
                  {{ post.body.substring(0, 60) }} ...
                </p>
                <div class="">
                  <button class="btn btn-danger" @click="del(post.id)">delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import axios from "axios";

export default {
  name: "ProductView",
  setup(){
    const store = useStore()

    const del = (id) => {
      if(confirm("Are you sure to delete!")){
        axios.delete('https://dummyjson.com/posts/'+ id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
         store.dispatch('setAllPosts', store.state.posts.filter((post) => post.id !== id))
      }
    }
    return { store, del }
  }
}
</script>

<style scoped>

</style>