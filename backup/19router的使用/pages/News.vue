<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newList" :key="news.id">
        <!-- 第一种写法 -->
        <!-- <RouterLink
          :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`"
          >{{ news.title }}</RouterLink
        > -->
        <!-- 第二种写法 -->
        <button @click="showNewsDetail(news)">查看新闻</button>
        <RouterLink
          :to="{
            // name: 'detail',
            path: '/news/detail',
            query: { id: news.id, title: news.title, content: news.content },
          }"
          >{{ news.title }}</RouterLink
        >
        <!-- <RouterLink
          :to="`/news/detail/${news.id}/${news.title}/${news.content}`"
          >{{ news.title }}</RouterLink
        > -->
        <!-- <RouterLink
          :to="{
            name: 'detail',
            params: { id: news.id, title: news.title, content: news.content },
          }"
          >{{ news.title }}</RouterLink
        > -->
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts" name="News">
import { reactive } from "vue";
import { RouterView, useRouter } from "vue-router";
const newList = reactive([
  {
    id: "hdwuihfcio",
    title: "很好的抗癌食物",
    content: "西蓝花",
  },
  {
    id: "hdwuihfc2o",
    title: "如何一夜暴富",
    content: "学IT",
  },
  {
    id: "hd4uihfcio",
    title: "震惊，万万没想到",
    content: "明天是周一",
  },
  {
    id: "hdwui5fcio",
    title: "好消息！好消息！",
    content: "快过年了",
  },
]);
const router = useRouter();
interface NewsInter {
  id: string;
  title: string;
  content: string;
}
function showNewsDetail(news: NewsInter) {
  router.push({
    name: "detail",
    query: { id: news.id, title: news.title, content: news.content },
  });
}
</script>
<style scoped>
/*新闻*/
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64967e;
}
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 00 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>