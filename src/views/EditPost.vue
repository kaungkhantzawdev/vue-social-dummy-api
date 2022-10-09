<template>
  <div class="row align-items-center mt-5 justify-content-center">
    <div class="col-lg-5">
      <div class="">
        <h1 class="text-start">Edit Post</h1>
        <form action="" @submit.prevent="update" id="formEdit">

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import {useStore} from "vuex";
import router from "@/router";
import {useRouter} from "vue-router";

export default {
  name: "EditPost",
  props: ['id'],
  setup(props){
    const oldData = ref()
    const store = useStore()
    const router = useRouter()


    axios.get('https://dummyjson.com/posts')
    .then(res => {
      oldData.value = store.state.posts.find((p) => p.id == props.id)
      document.getElementById('formEdit').innerHTML = `

      <div class="mt-3">
            <div class="mb-3">
              <div class="form-floating mb-3">
                <input type="text" name="title" value="${oldData.value.title}" class="form-control" id="title" placeholder="username">
                <label for="title">Title</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" name="body" class="form-control" value="${oldData.value.body}" id="body" placeholder="username">
                <label for="body">Description</label>
              </div>
              <div class="text-start">
                <button class="btn btn-primary btn-lg">update Post</button>
              </div>
            </div>
          </div>

      `
      console.log(oldData.value)
    })

    const update = (e) => {
      const formData = new FormData(e.target)
      const input = Object.fromEntries(formData.entries())
      let data = store.state.posts.find((p) => p.id == props.id)
      data.title = input.title
      data.body = input.body

      axios.put('https://dummyjson.com/posts/'+ props.id, input)
          .then(res => {
            router.push('/products')
            setTimeout(_=> {
              alert(res.data.title + " is updated")
            }, 1500)
          })
    }

    return { update, oldData }
  }
}
</script>

<style scoped>

</style>