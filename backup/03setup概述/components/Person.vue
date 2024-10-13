<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  beforeCreate() {
    console.log("beforeCreate");
  },
  setup() {
    console.log("setup");
    // console.log(this) setup函数中的this是undefined,vue3中已经弱化this了
    // 数据，原来是写在data中的，此时name,age,tel都不是响应式数据
    let name = "张三";
    let age = 18;
    let tel = "13888888";
    // 方法
    function changeName() {
      name = "zhangsan"; //注意：这样修改name，页面是没有变化的
      console.log(name); //name确实改了，但name不是响应式的
    }
    function changeAge() {
      age = 200; //注意：这样修改age，页面是没有变化的
      console.log(age); //age确实改了，但age不是响应式的
    }
    function showTel() {
      alert(tel);
      console.log(tel);
    }
    return { name, age, tel, changeName, changeAge, showTel };
  },
};
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>