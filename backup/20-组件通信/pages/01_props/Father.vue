<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>汽车{{ car }}</h4>
    <h4 v-if="toy">子给的玩具：{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<script setup lang="ts" name="Child">
import Child from "./Child.vue";
import { ref } from "vue";

// 数据
let car = ref("奔驰");
let toy = ref("");
//方法
function getToy(value) {
  toy.value = value;
}
</script>

<style scoped>
.father {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>