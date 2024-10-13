<template>
  <div class="outer">
    <h2>我是app组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h2>加载中....</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue'
import { Suspense } from 'vue';
import { ref, customRef } from "vue";
</script>

<style scoped>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 400px;
  height: 400px;
  filter: saturate(200%);
}
img{
  width:  270px;
}
button {
  margin-right: 5px;
}
</style>