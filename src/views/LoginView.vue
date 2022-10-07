<template>
    <div>
        <div class=" row d-flex align-items-center justify-content-center min-vh-100">
            <div class="col-lg-5">
              <form action="" class="" @submit.prevent="login">
                <div class="">
                  <h1 class="mb-3 text-start">LOGIN</h1>
                  <div class="form-floating mb-3">
                    <input type="text" v-model="username" name="username" class="form-control" id="floatingInput" placeholder="username">
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating">
                    <input type="password" v-model="password" name="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="d-flex align-items-start my-3">
                    <button class=" btn btn-primary btn-lg">login</button>
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
    import { useStore } from 'vuex';
    import { useRouter } from  'vue-router';

    export default {
        name: "LoginView",
        setup(){
          //route
          const router = useRouter();

          const username = ref('kminchelle');
          const password = ref('0lelplR');

          const store = useStore();
          const login = (e) => {
              let loginData = new FormData(e.target)
              let input = Object.fromEntries(loginData.entries())

              // console.log(input)
              axios.post('https://dummyjson.com/auth/login', input)
                .then(res => {
                  console.log(res.data)
                  localStorage.setItem('auth', res.data.token)
                  localStorage.setItem('user', JSON.stringify(res.data))
                  store.dispatch('setAuthToken', localStorage.getItem('auth'))
                  store.dispatch('setUserDetail', JSON.parse(localStorage.getItem('user')))
                  router.push('/products')
                })
                .catch(err => {
                  console.log(err)

                })
          }

          return { login, username, password }
        }
    }
</script>

<style lang="scss" scoped>

</style>