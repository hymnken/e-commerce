import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  // payload 所有的分类集合
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList ({ commit }) {
      // 获取分类数据 然后修改
      const data = await findAllCategory()
      commit('setList', data.result)
    }
  }
}
