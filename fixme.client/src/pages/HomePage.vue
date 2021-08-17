<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="../assets/img/DW.jpg" class="rounded-circle" alt="Logo">
    <h1 class="my-5 text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Welcome to Derek's Playground</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  background-color: black;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
