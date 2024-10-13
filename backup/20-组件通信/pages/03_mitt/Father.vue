<template>
    <div class="father"> 
      <h3>父组件</h3>
      <Child1 />
      <Child2 />
    </div>
  </template>
  
  <script setup lang="ts" name="father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  </script>
  
  <style scoped>
  .father{
      margin-top: 50px;
      background-color: orange;
      padding: 10px;
      box-shadow: 0 0 10px black;
      border-radius: 10px;
  }
  </style>