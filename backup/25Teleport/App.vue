<template>
  <div class="outer">
    <h2>我是app组件</h2>
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    <br>
    <Modal />
  </div>
</template>

<script setup lang="ts" name="App">
import Modal from './Modal.vue'
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