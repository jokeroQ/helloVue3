<template>
  <div class="about">大家好</div>
</template>

<script setup lang="ts" name="About">
import { onMounted, onUnmounted } from "vue";
onMounted(() => {
  console.log("about组件挂载了");
});
onUnmounted(() => {
  console.log("about组件卸载了");
});
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: □rgb(85, 84, 84);
  font-size: 18px;
}
</style>