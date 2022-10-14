<template lang="">
  <div class="container">
    <p>{{$store.state.moduleA.username}}</p>
    <p>{{$store.state.moduleB.username}}</p>
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationFn">mutations</button>
    <button @click="actionsFn">actions</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const mutationFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      store.dispatch('moduleB/updateName')
    }

    return {
      mutationFn,
      actionsFn
    }
  }
}
</script>
<style lang="">
</style>
