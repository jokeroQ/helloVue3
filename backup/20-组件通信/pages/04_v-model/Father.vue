<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ usename }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="usename" />
     -->
    <!-- <input type="text" :value="usename" @input="usename=(<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上  -->
    <!-- <NjrInput v-model="modelValue"></NjrInput> -->
    <!-- <NjrInput :modelValue="usename" @update:modelValue="usename=$event"></NjrInput> -->

    <!-- 修改modelValue -->
    <NjrInput v-model:name="usename" v-model:pass="password"></NjrInput>
  </div>
</template>
  
  <script setup lang="ts" name="father">
import { ref } from "vue";
import NjrInput from "./NjrInput.vue";

let usename = ref("zhangsan");
let password = ref("1234");
</script>
  
  <style scoped>
.father {
  margin-top: 50px;
  background-color: #a5a5a5;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>