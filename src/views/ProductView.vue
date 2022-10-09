<template>
  <div class="">
      <div class="container">
        <div class="row g-3 mb-5">
          <div class="col-12">
            <div class="my-5">
              <h1 class="text-center">LIST OF POSTS</h1>
            </div>
          </div>
          <div class="mb-4">
            <router-link to="/post-add" class="btn btn-primary">Create Post</router-link>
          </div>
          <product :posts="store.state.posts"></product>
        </div>
      </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import Product from "@/components/Product";

export default {
  name: "ProductView",
  components: {Product},
  setup(){
    const store = useStore()

    return { store }
  }
}
</script>

<style scoped>

</style>