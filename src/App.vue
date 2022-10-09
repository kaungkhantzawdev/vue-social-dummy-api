<template>
  <div>
    <nav-bar v-if="store.state.auth" :username="store.state.user.username"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import NavBar from "@/components/NavBar";
import axios from "axios";

 const store = useStore()
 onMounted(() => {
   store.dispatch('setAuthToken', localStorage.getItem('auth'))
   store.dispatch('setUserDetail', JSON.parse(localStorage.getItem('user')))
   axios.get("https://dummyjson.com/posts")
       .then(res => {
         console.log(res.data.posts)
         store.dispatch('setAllPosts', res.data.posts)
       })
        .catch(err => alert(err))

   axios.get("https://dummyjson.com/users")
        .then(res => {
          console.log(res.data.users)
          store.dispatch('setAllUsers', res.data.users)
        })
        .catch(err => console.log(err))
   // axios.get("https://dummyjson.com/comments")
   //      .then(res => {
   //        console.log(res.data.comments)
   //        store.dispatch('setAllComments', res.data.comments)
   //      })
   //      .catch(err => console.log(err))
 })

</script>

<style lang="scss">
@import "./app.scss";
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983 !important;
    }
  }
}
</style>
