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
    <div class="row d-flex justify-content-end align-items-end">
      <p class="col-4 hid" style="height: 10vh;">
        IT'S EVERYWHERE
      </p>
    </div>
    <div class="row">
      <div class="col-5 d-flex justify-content-center">
        <p class="hid-r">
          Five
        </p>
      </div>
    </div>
    <div class="row" style="height: 15vh;">
      <div class="col-3"></div>
      <div class="col-8"></div>
      <div class="col-1 hid d-flex align-items-end">
        <form @submit.prevent="answers">
          <input v-model="state.answers.red" type="text" class="form-control" placeholder="red">
          <input v-model="state.answers.blue" type="text" class="form-control" placeholder="blue">
          <input v-model="state.answers.yellow" type="text" class="form-control" placeholder="yellow">
          <input v-model="state.answers.green" type="text" class="form-control" placeholder="green">
          <button class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { answersService } from '../services/AnswersService'
import { AppState } from '../AppState'
import { router } from '../router'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const state = reactive({
      answers: {
        red: '',
        blue: '',
        yellow: '',
        green: ''
      }
    })
    return {
      state,
      answers(state) {
        const response = answersService.trialOneAnswer(state.answers)
        logger.log(response)
        if (response === true) {
          router.push({ name: 'TrialTwo' })
          AppState.trialOne = true
        }
      }
    }
  }

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
.hid-r {
  opacity: 0;
  font-size: 20pt;
  color: rgb(255, 62, 62);
}
.hid-r:hover {
  transition: .2s all;
  opacity: 100;
}
</style>
