<template>
  <div class="outer">
    <h2>我是app组件{{ x }}</h2>
    <Child />
    <Hello />
  </div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue'
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