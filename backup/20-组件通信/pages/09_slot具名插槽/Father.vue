<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <template #s2>
           <ul >
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        </template>
       
      </Category>
      <Category title="今日美食城市">
        <template v-slot:s2>
        <img :src="imgUrl" alt="" />
        </template>
      </Category>
      <Category title="今日影视推荐">
        <template v-slot:s2>
        <video :src="videoUrl" controls></video>
        </template>
      </Category>
    </div>

    <!-- 直接参考之前讲的pinia即可 -->
  </div>
</template>
  
  <script setup lang="ts" name="Father">
import Category from "./Category.vue";
import { reactive, ref, provide } from "vue";

let games = reactive([
  {
    id: "uehfuiehf",
    name: "英雄联盟",
  },
  {
    id: "uehfuiehf1",
    name: "王者荣耀",
  },
  {
    id: "uehfuiehf2",
    name: "红色警戒",
  },
  {
    id: "uehfuiehf3",
    name: "斗罗大陆",
  },
]);

let imgUrl = "https://z1.ax1x.com/2023/11/19/piNxLo4jpg";
let videoUrl = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
</script>
  
  <style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-between;
}
img,
video {
  width: 100%;
}
</style>