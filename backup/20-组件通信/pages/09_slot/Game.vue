<template>
  <div class="game">
    <h2>游戏列表</h2>
    <!-- <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul> -->
    <slot name="qwe" :games="games"></slot>
  </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from "vue";
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
</script>

<style scoped>
.game {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>