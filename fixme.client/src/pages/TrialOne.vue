<template>
  <div class="container-fluid trial">
    <div class="row" style="height: 20vh;">
      <div class="col-4 d-flex justify-content-center align-items-end">
        <p class="hid">
          HIDDEN TEXT
        </p>
      </div>
      <div class="col-4 text-center mt-3 title">
        <h1>Trial One</h1>
      </div>
      <div class="col-4"></div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.trial {
  background-color: black;
  user-select: none;
}
.title {
  color: #e7c82dc9;
}
.hid {
  opacity: 0;
  color: rgb(185, 185, 185);
}
.hid:hover {
  transition: .2s all;
  opacity: 100;
}
</style>
