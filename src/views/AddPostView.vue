<template>
  <div class="col-lg-5">
    <div class="">
      <h1 class="">Create Post</h1>
      <div class="mt-3">
        <div class="mb-3">
          <div class="form-floating mb-3">
            <input type="text" v-model="username" name="username" class="form-control" id="title" placeholder="username">
            <label for="title">Title</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" v-model="username" name="username" class="form-control" id="body" placeholder="username">
            <label for="body">Username</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPostView"
}
</script>

<style scoped>

</style>