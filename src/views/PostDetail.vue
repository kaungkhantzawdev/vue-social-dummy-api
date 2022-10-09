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
              <div class="my-3" id="image">

              </div>
              <p class="">
                {{ data.body }}
              </p>
              <div class="mt-3 mb-4">
                  <span class="text-primary" v-for="tag in data.tags">
                    # {{ tag }}
                  </span>
              </div>
              <div class="my-4 " v-if="comment">
                  <h5 class="mb-3">Comments</h5>
                  <div class="my-3">
                    <form action="" @submit.prevent="addComment" class="d-flex align-items-center">
                      <input type="text" name="body" placeholder="write your comment" class="form-control w-50" autofocus>
                      <input type="hidden" name="postId" :value="route.params.id">
                      <input type="hidden" name="userId" :value="store.state.user.id">
                      <button class="btn btn-primary ms-2">add comment</button>
                    </form>
                  </div>
                  <div class=" ms-5" v-for="com in comment" :key="com.id">
                    <div class=" mb-2 d-inline-block">
                      <div class="d-flex align-items-center mb-3">
                        <p class="text-primary mb-0">
                          <i class="bi bi-person-circle text-dark me-2"></i>{{ com.user.username}}
                        </p>
                        <div class="ms-4">
                          <button class="btn btn-sm btn-danger me-2" @click.prevent="delCom(com.id)">delete</button>
                          <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click.prevent="editCom(com.id)">edit</button>
                        </div>
                      </div>
                      <p class="mb-3 ms-5">
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
    <div class="">

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="" id="updateForm" @submit.prevent="updateCom">
                <input type="text" class="form-control" name="body" id="editInput" autofocus>
                <input type="hidden" id="comId" name="id">
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-primary" form="updateForm" type="submit" data-bs-dismiss="modal">update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import {useStore} from "vuex";
import {useRoute} from "vue-router";


export default {
  name: "PostDetail",
  props: ['id'],
  setup(props){
    const data = ref()
    const comment = ref()
    const store = useStore()
    const route = useRoute()

    const commentInput = ref(false)

    axios.get("https://dummyjson.com/posts/")
      .then(res => {
        data.value = store.state.posts.find((p) => p.id == props.id)
        axios.get("https://dummyjson.com/users/"+data.value.userId)
            .then(user => {
              document.getElementById('image').innerHTML = `
                 <div class="d-flex align-items-center">
                  <img src="${user.data.image}" class="rounded" style="height: 50px; object-fit: cover; object-position: center">
                  <span class="ms-2">${user.data.username}</span>
                </div>
            `

            })

      })
      .catch(err => console.log(err))

    axios.get("https://dummyjson.com/posts/"+props.id+"/comments")
      .then(dat =>{
        console.log(dat.data.comments)
        comment.value = dat.data.comments
        }
      )
      .catch(err => {
        console.log(err)
        alert(err)
      })

    //add comment
    const addComment = (e) => {
      const formData = new FormData(e.target)
      const input = Object.fromEntries(formData.entries())

      axios.post("https://dummyjson.com/comments/add", input)
          .then(res => {
            comment.value.push(res.data)
          })
          .catch(err => console.log(err))

    }

    //del comment
    const delCom = (id) => {
      confirm('Are you sure to delete')
      comment.value = comment.value.filter((com) => com.id !== id)
    }

    //edit comment
    const editCom = (id) => {
      commentInput.value = false
      let OldComment = comment.value.filter((com) => com.id == id)[0]
      console.log(OldComment.body)
      document.getElementById('editInput').value = OldComment.body
      document.getElementById('comId').value = OldComment.id
    }


    //update comment
    const updateCom = (e) => {
      let formData = new FormData(e.target)
      let inputData = Object.fromEntries(formData.entries())
      let updateCom = comment.value.find((com) => com.id == inputData.id)
      updateCom.body = inputData.body
      console.log(inputData)
      setTimeout(_ => {
        alert(inputData.body+ " is updated")
      }, 1500)
    }

    return { data, comment, addComment, route, store, delCom , editCom, commentInput, updateCom}
  }
}
</script>

<style scoped>

</style>