<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br />
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstname">修改游戏名字</button>
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive } from "vue";
//数据
let car = reactive({ brand: "奔驰", price: 100 });
let games = reactive([
  {
    id: "dwfw2",
    name: "ifhwiofh",
  },
  {
    id: "dwfwf2",
    name: "ifhwiofh",
  },
  {
    id: "dwf2w2",
    name: "ifhwiofh",
  },
]);
let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
});
console.log("%c Line:12 🌶 car", "color:#b03734", car);

console.log("%c Line:14 🍭", "color:#33a5ff", Proxy);

function changePrice() {
  car.price += 10;
}
function changeFirstname() {
  games[0].name = "ufwhuifhweuih";
}
function changeObj() {
  obj.a.b.c = 999;
}
</script>

<!-- <script lang="ts">
export default {
  name: "Person",
  setup() {
    // console.log(this) setup函数中的this是undefined,vue3中已经弱化this了
    // 数据，原来是写在data中的，此时name,age,tel都不是响应式数据
    let name = "张三";
    let age = 18;
    let tel = "13888888";
    let address = "北京";
    // let x=d;
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
    //将数据、方法交出去，模板中才可以使用
    return { name, age, tel, changeName, changeAge, showTel,address };
  },
};
</script> -->

<style scoped>
button {
  margin: 0 5px;
}
</style>