<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, watch, watchEffect, defineExpose } from "vue";
let title2 = ref();
let a = ref(1);
let b = ref(2);
let c = ref(3);
function showLog() {
  console.log(title2.value);
}
defineExpose({ a, b, c });
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>