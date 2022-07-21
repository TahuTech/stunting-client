<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Klanting</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/balita">Balita</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/knn">KNN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/saran">Saran</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dataset">Dataset</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style>
body {
  background-color: rgb(16, 149, 227);
}

.mt-5 {
  margin-top: 100px !important;
}
</style>



<script>export default {
  name: 'App',
}

</script>
