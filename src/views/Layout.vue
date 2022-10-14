<template lang="">
  <div>
    <!-- 顶部通栏 -->
    <nav>顶部</nav>
    <!-- 头部组件 -->
    <header>头部</header>
    <!-- 中间内容 -->
    <div class="main">
      <!-- 二级路由 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <footer>底部</footer>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout'
}
</script>
<style lang="">
</style>
