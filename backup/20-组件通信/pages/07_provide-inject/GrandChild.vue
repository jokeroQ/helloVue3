<template>
  <div class="grand-child">
    <h3>孙组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }} 万元</h4>
    <button @click="updatedMoney(6)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from "vue";
let {money,updatedMoney} = inject("moneyContext", {money:0,updatedMoney:(x:number)=>{}});
let car = inject("car", { brand: "未知", price: 0 });
</script>

<style scoped>
.grand-child {
  margin-top: 20px;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>