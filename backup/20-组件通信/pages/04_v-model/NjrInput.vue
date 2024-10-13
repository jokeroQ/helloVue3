<template>
  <input type="text" :value="name" @input="emit('update:name',(<HTMLInputElement>$event.target).value)" />
  <input type="text" :value="pass" @input="emit('update:pass',(<HTMLInputElement>$event.target).value)" />
</template>

<script setup lang="ts" name="NjrInput">
defineProps(["name","pass"]);
const emit=defineEmits(['update:name','update:pass'])
</script>

<style scoped>
input {
  border:2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>
