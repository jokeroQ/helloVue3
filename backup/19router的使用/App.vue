<template>
  <div class="app">
    <Header />
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink replace to="/home" active-class="active">首页</RouterLink>
      <RouterLink replace :to="{ name: 'news' }" active-class="active"
        >新闻</RouterLink
      >
      <RouterLink replace :to="{ path: '/about' }" active-class="active"
        >关于</RouterLink
      >
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 此处以后可能要展示各种组件，到底展示哪个组件，需要看路径 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
// import { RouterView, RouterLink } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style>
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}
.navigate a.active {
  background-color: #64967e;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 00 1px black;
  font-family: 微软雅黑；;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>