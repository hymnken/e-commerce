import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  // vuex的插件vuex-persistedstate来支持vuex的状态持久化。
  plugins: [
    createPersistedState({
      key: 'commerce-pc-store',
      paths: ['user', 'cart']
    })
  ]
})

// const moduleA = {
//   state: {
//     username: 'moduleA'
//   }
//   // getters: {
//   //   newName (state) {
//   //     return state.username + '!!!!'
//   //   }
//   // }
// }

// const moduleB = {
//   namespaced: true,
//   state: {
//     username: 'moduleB'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '!!!!'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   }
// }

// export default createStore({
//   modules: {
//     moduleA,
//     moduleB
//   }
// })

// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName (state) {
//       return state.username + '???'
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   },
//   modules: {}
// })
