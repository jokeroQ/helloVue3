<template>
  <Person a="哈哈" :list="personList" />
</template>

<script lang="ts" setup>
import Person from "./components/Person.vue";
import { type Persons } from "@/types";
import {reactive} from 'vue'
// let person: PersonInter = {
//   id: "asdajkhfi",
//   name: "张三",
//   age: 60,
// };
let personList = reactive<Persons>([
  {
    id: "asdajkhfi",
    name: "张三",
    age: 60,
  },
  {
    id: "asdajkhf3",
    name: "李四",
    age: 18,
  },
  {
    id: "asdajkhf7",
    name: "王五",
    age: 20,
  },
]);
</script>

<style>
#app {
  background-color: antiquewhite;
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>