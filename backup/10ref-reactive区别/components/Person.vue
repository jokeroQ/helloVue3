<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changeCar">修改汽车</button>
    <hr />
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from "vue";
//数据
// let car = ref({ brand: "奔驰", price: 100 });
let car = reactive({ brand: "奔驰", price: 100 });
let sum = ref(0);

function changePrice() {
  car.price += 10;
  // car.value.price += 10;
}
function changeBrand() {
  car.brand = "大众";
  // car.value.brand = "大众";
}
function changeCar() {
  // car = { brand: "奥拓", price: 1 }; //这么写页面不更新
  // car = reactive({ brand: "奥拓", price: 1 });//这么写页面不更新

  //下面这个写法页面可以更新
  // Object.assign(car, { brand: "奥拓", price: 1 });
  // car.value={ brand: "奥拓", price: 1 }
}
function changeSum() {
  sum.value += 1;
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