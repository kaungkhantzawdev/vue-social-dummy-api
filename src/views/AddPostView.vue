<template>
  <div class="row align-items-center mt-5 justify-content-center">
    <div class="col-lg-5">
      <div class="">
        <h1 class="text-start">Create Post</h1>
        <form action="" @submit.prevent="add">
          <div class="mt-3">
            <div class="mb-3">
              <div class="form-floating mb-3">
                <input type="text" v-model="title" name="title" class="form-control" id="title" placeholder="username">
                <label for="title">Title</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" v-model="body" name="body" class="form-control" id="body" placeholder="username">
                <label for="body">Description</label>
              </div>
              <input type="hidden" name="userId" :value="store.state.user.id">
              <div class="text-start">
                <button class="btn btn-primary btn-lg">Add Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name: "AddPostView",
  setup(){
    const title = ref()
    const body = ref()
    const store = useStore()
    const router = useRouter()

    const add = async (e) => {
      const formData = new FormData(e.target)
      const input = Object.fromEntries(formData.entries())
      console.log(input)
      await axios.post('https://dummyjson.com/posts/add', input)
        .then(res => {
          console.log(res)
          store.state.posts.push(res.data)
          router.push({name: 'products'})
        })

    }
    return { title, body, add, store}
  }
}
</script>

<style scoped>

</style>