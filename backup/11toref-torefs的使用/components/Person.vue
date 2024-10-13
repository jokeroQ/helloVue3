<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}{{ nl }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { toRef, toRefs, reactive } from "vue";
//数据
let person = reactive({
  name: "张三",
  age: 18,
});
let { name, age } = toRefs(person);
// let x = toRefs(person);
// console.log(x);
let nl = toRef(person, "age");
//方法
function changeName() {
  name.value += "lisi";
  console.log(name.value, person.name);
}
function changeAge() {
  age.value += 1;
}
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>