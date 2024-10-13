<template>
  <div class="person">
    <!-- <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr />
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button> 
    <hr />
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr />
    <h2>测试数据{{ obj.a.b.c }}</h2>
    <button @click="test">修改数据</button> 
    <hr />
    <h1>情况四：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改 车</button> -->
    <hr />
    <h1>情况五：监视上述多个数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改 车</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, watch } from "vue";
//情况四、情况五
let person = reactive({
  name: "张三",
  age: 18,
  car: {
    c1: "奔驰",
    c2: "宝马",
  },
});
//方法
function changeName() {
  person.name += "~";
}
function changeAge() {
  person.age += 1;
}
function changeC1() {
  person.car.c1 = "奥迪";
}
function changeC2() {
  person.car.c2 = "大众";
}
function changeCar() {
  person.car = { c1: "雅迪", c2: "艾玛" };
}
//监视 情况五：监视上述多个数据
watch(
  [()=>person.name,person.car],
  (newValue, oldValue) => {
    console.log("person.car变化了", newValue, oldValue);
  },
  { deep: true }
);
//监视 情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
// watch(()=>{return person.name},(newValue,oldValue)=>{
//   console.log('person.name变化了',newValue,oldValue)
// })
//监视 情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也可以写成函数式，更推荐写成函数式
// watch(
//   () => person.car,
//   (newValue, oldValue) => {
//     console.log("person.car变化了", newValue, oldValue);
//   },
//   { deep: true }
// );
//情况三
// let person = reactive({
//   name: "张三",
//   age: 18,
// });
// let obj = reactive({
//   a: {
//     b: {
//       c: 666,
//     },
//   },
// });
// function changeAge() {
//   person.age += 1;
// }
// function changeName() {
//   person.name += "~";
// }
// function changePerson() {
//   Object.assign(person, { name: "李四", age: 30 });
// }
// function test() {
//   obj.a.b.c = 888;
// }
//监视，情况三：监视【reactive】定义的【对象类型】数据,且默认是开启深度监视的
// watch(person, (newValue, oldValue) => {
//   console.log("person变化了", newValue, oldValue);
// });
// watch(obj, (newValue, oldValue) => {
//   console.log("obj变化了", newValue, oldValue);
// });

//数据
//情况二
// let person = ref({
//   name: "张三",
//   age: 18,
// });
// function changeAge() {
//   person.value.age += 1;
// }
// function changeName() {
//   person.value.name += "~";
// }
// function changePerson() {
//   person.value = { name: "李四", age: 30 };
// }
//监视
//情况二下的情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部的变化，需要手动开启
//watch的第一个参数是：被监视的数据
//watch的第二个参数是：监视的回调
//watch的第三个参数是：配置对象（deep,immediate等等）
// watch(
//   person,
//   (newValue, oldValue) => {
//     console.log("变化了", newValue, oldValue);
//   },
//   { deep: true, immediate: true }
// );

//情况一
// let sum = ref(0);
// function changeSum() {
//   sum.value += 1;
// }
//监视
// const stopWatch = watch(sum, (newValue, oldValue) => {
//   console.log("%c Line:17 🍺", "color:#b03734", newValue, oldValue);
//   if (newValue >= 10) {
//     stopWatch();
//   }
// });
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>