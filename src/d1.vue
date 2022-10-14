<template lang="">
  <div>
    App
    <p>{{$store.state.username}}</p>
    <hr>
    <p>{{$store.getters.newName}}</p>
    <button @click="fn">an</button>
  </div>
  <p></p>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    console.log(store.state.username)
    console.log(store.getters.newName)

    const fn = () => {
      // store.commit('updateName')
      store.dispatch('updateName')
    }

    return { fn }
  }
}
</script>
<style lang="">
</style>
