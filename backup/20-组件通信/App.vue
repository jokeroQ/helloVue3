<template>
  <div class="container-fluid wrapper">
    <h1 class="title">Vue3 组件间通信</h1>
    <hr />
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <!-- 导航区 -->
        <router-link
          v-for="i in routerGroup"
          :key="i.path"
          active-class="active"
          class="list-group-item"
          :to="i.path"
          >{{ i.title }}</router-link
        >
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 占位一个展示区 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="App">
import { reactive } from "vue";
let routerGroup = reactive([
  {
    path: "/props",
    title: "1.props",
  },
  {
    path: "/event",
    title: "2.event",
  },
  {
    path: "/mitt",
    title: "3.mitt",
  },
  {
    path: "/model",
    title: "4.model",
  },
  {
    path: "/attrs",
    title: "5.attrs",
  },
  {
    path: "/ref-parent",
    title: "6.ref-parent",
  },
  {
    path: "/provide-inject",
    title: "7.provide-inject",
  },
  {
    path: "/pinia",
    title: "8.pinia",
  },
  {
    path: "/slot",
    title: "9.slot",
  },
]);
</script>

<style scoped>
</style>