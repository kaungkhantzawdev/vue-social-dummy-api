<template>
  <div class="col-lg-4" v-for="post in posts" :key="post.id">
    <div class="card text-start">
      <div class="card-body">
        <router-link :to="{name: 'post-detail', params: { id: post.id }}" class="text-decoration-none">
          <h4 class="text-truncate">
            {{ post.title }}
          </h4>
        </router-link>
        <p class="">
          {{ post.body.substring(0, 60) }} ...
        </p>
        <div class="mt-3 mb-4">
        <span class="text-primary" v-for="tag in post.tags">
          # {{ tag }}
        </span>
        </div>
        <div class="">
          <button class="btn btn-sm btn-danger" @click="del(post.id)">delete</button>
          <button class="btn btn-sm btn-primary ms-2" @click="edit(post.id)">edit</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import axios from "axios";
import {useRouter} from "vue-router";

export default {
  name: "Product",
  props: {
    posts: {
      required: true
    }
  },
  setup(){
    const store = useStore()
    const router = useRouter()
    const del = (id) => {
      if(confirm("Are you sure to delete!")){
        axios.delete('https://dummyjson.com/posts/'+ id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        store.dispatch('setAllPosts', store.state.posts.filter((post) => post.id !== id))
      }
    }

    const edit = (id) => {
      return router.push({name: 'post-edit', params: { id: id}})
    }
    return { store, del, edit }
  }
}
</script>

<style scoped>

</style>