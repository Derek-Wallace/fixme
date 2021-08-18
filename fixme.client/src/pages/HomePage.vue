<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="../assets/img/DW.jpg" class="rounded-circle" alt="Logo">
    <h1 class="my-5 text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Welcome to Derek's Playground</span>
    </h1>
  </div>
  <button @click="trialOne" class="btn p-3 rounded-pill gold fab">
    Trial One
  </button>
</template>

<script>
import { router } from '../router'
export default {
  setup() {
    return {
      trialOne() {
        router.push({ name: 'TrialOne' })
      }
    }
  }
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
.gold {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 16pt;
  font-weight: 700;
  background-color: #f7df65;
  box-shadow: inset 5px 10px 5px 0px #e7c82d;
}
.fab {
  position: absolute;
  bottom: 40px;
  right: 40px;
}
.gold:hover {
  transition: .5s all;
  color: white;
  background-color: #e7c82d;
  box-shadow: 1px 1px 1px 0px #e7c82d;
}
</style>
