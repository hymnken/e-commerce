import axios from 'axios'
import store from '@/store'
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 3000
})

// token判定

instance.interceptors.request.use(config => {
  // 有token就在头部携带
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data
instance.interceptors.response.use(
  // 成功时返回res.data
  res => res.data,
  // 失败
  err => {
    if (err.response && err.response.status == 401) {
      // 清空用户无效信息 跳转到登录页 传参（当前路由地址）
      store.commit('user/setUser', {})
      // 将当前路由地址转码最后拼接
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
  }
)
// 负责发请求的函数 有请求地址 方式 提交的数据
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // get:params  ||  其他：data 动态设置 转化小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
