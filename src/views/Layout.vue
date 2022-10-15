<template lang="">
  <div>
    <!-- 顶部通栏 -->
    <NavBar />
    <!-- 头部组件 -->
    <Header />
    <!-- 中间内容 -->
    <div class="app-body">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <Footer />
  </div>
</template>
<script>
import NavBar from '@/components/navbar.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import { useStore } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    NavBar,
    Header,
    Footer
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>
<style scoped lang="less">

.app-body{
  min-height: 600px;
}
</style>
