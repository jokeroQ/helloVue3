<template>
  <ul class="news-list">
    <!-- 路由的query方式传参 -->
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>

    <!-- 路由的params方式传参 -->
    <!-- <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li> -->

    <!-- <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li> -->
  </ul>
</template>
    <script setup lang="ts"name="About">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();

let { query } = toRefs(route);

let { params } = toRefs(route);

// props配置写法
// defineProps(["id", "title", "content"]);
</script>
    <style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}
.news-list > li {
  line-height: 30px;
}
</style>