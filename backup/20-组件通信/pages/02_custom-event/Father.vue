<template>
  <div class="father">
    <h3>父组件</h3>
    <h4 v-if="toy">子给的玩具：{{ toy }}</h4>
    <!-- 给子组件Child绑定事件 -->
    <Child @send-toy="saveToy" />
  </div>
</template>
  
  <script setup lang="ts" name="Child">
import Child from "./Child.vue";
import { ref } from "vue";
let toy = ref("");
//用于保存传递过来的玩具
function saveToy(value: string) {
  console.log("saveToy", value);
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