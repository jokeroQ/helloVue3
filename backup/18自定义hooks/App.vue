<template>
  <Person v-if="isShow" />
</template>

<script lang="ts" setup>
import Person from "./components/Person.vue";
import { ref, onMounted } from "vue";
let isShow = ref(true);
//挂载完毕
onMounted(() => {
  console.log("父--挂载完毕");
});
</script>

<style>
#app {
  background-color: antiquewhite;
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>