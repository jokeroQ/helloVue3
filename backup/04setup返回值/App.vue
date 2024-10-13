<template>
    <Person />
</template>

<script lang="ts">
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Person },//注册组件
};
</script>

<style>
#app {
  background-color: antiquewhite;
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>