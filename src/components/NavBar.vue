<template>
    <nav class="navbar navbar-expand-lg bg-light border-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Posts</router-link>
            </li>
          </ul>
          <!-- Example single danger button -->
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {{ username }}
            </button>
            <ul class="dropdown-menu">

              <li><router-link class="dropdown-item text-danger" to="/logout">logout</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
  name: "NavBar",
  props: {
      username: {
        required: true
      }
  }

}
</script>

<style scoped>

</style>