<template>
  <div class="container">
    <div class="row min-vh-100 align-items-center justify-content-center">
      <div class="col-12">
        <div class="">
          <img src="../assets/not-found.svg" alt="" class="404 page">
          <div class="mt-3">
            <h3 class="">We are sorry</h3>
            <router-link to="home">
              read more core post
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped>

</style>