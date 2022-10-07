<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="my-5">
          <h1 class="">
            POST DETAIL
          </h1>
        </div>
        <div class="" v-if="data">
          <div class="text-start">
            <div class="">
              <h4 class="">
                {{ data.title }}
              </h4>
              <div class="mt-3 mb-4">
                  <span class="text-primary" v-for="tag in data.tags">
                    # {{ tag }}
                  </span>
              </div>
              <p class="">
                {{ data.body }}
              </p>
              <div class="mt-4 mx-3" v-if="comment">
                  <div class="" v-for="com in comment">
                    <div class="card mb-2 d-inline-block">
                      <div class="card-body">
                        <h5 class="">
                          user # {{ com.user.username}}
                        </h5>
                        <p class="mb-0">
                          {{ com.body }}
                        </p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "PostDetail",
  props: ['id'],
  setup(props){
    const data = ref()
    const comment = ref()

    axios.get("https://dummyjson.com/posts/"+ props.id)
      .then(res => {
        // console.log(res.data)
        data.value = res.data
      })

    axios.get("https://dummyjson.com/posts/"+props.id+"/comments")
      .then(dat =>
          // console.log(dat.data.comments)
          comment.value = dat.data.comments
      )
      .catch()

    return { data, comment }
  }
}
</script>

<style scoped>

</style>