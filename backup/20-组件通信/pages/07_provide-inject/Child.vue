<template>
    <div class="child">
      <h3>子组件</h3>
      <!-- <h4>a:{{ a }}</h4> -->
      <GrandChild  />
    </div>
  </template>
    
    <script setup lang="ts" name="Child">
  import GrandChild from "./GrandChild.vue";
  // defineProps(["a"]);
  </script>
    
    <style scoped>
  .child {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
  </style>