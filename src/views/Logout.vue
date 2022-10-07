<template>
  <div class="">
    logout
  </div>
</template>

<script>
import { useStore } from "vuex";
import {onMounted} from "vue";
import { useRouter} from "vue-router";

export default {
  name: "Logout",
  setup(){
    const store = useStore()
    const router = useRouter()
    onMounted(() => {
      store.dispatch('setRemoveToken')
      router.push({name: 'login'})
    })
  }
}
</script>

<style scoped>

</style>