<template>
  <!-- <h2 id="title2">你好</h2> -->
  <h2 ref="title2">你好</h2>
  <button @click="showLog">测试</button>
  <Person ref="ren" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Person from "./components/Person.vue";
let title2 = ref();
let ren=ref()
function showLog() {
  // console.log(title2.value);
  console.log(ren.value);
}
</script>

<style>
#app {
  background-color: antiquewhite;
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>