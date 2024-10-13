<template>
  <div class="app">
    <h2>姓名{{person.name}}</h2>
    <h2>年龄{{person.age}}</h2>
    <button @click="person.age+=1">修改年龄</button>
    <hr>
  </div>
</template>

<script setup lang="ts" name="App">
import { ref,reactive,toRaw, markRaw } from "vue";
import mockjs from 'mockjs'

/** toRaw */
let person=reactive({
  name:'tony',
  age:18
})
//用于获取响应式对象里的一个原始对象
let person2=toRaw(person)
// console.log("响应式数据",person)
// console.log("原始数据",person2)

/** markRaw */
let car=markRaw({brand:"奔驰",price:100})
let car2=reactive(car)

let mock=markRaw(mockjs)
console.log(mock)

</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
button{
  margin-right: 5px;
}
</style>