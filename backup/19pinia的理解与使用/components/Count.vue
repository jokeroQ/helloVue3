<template>
  <div class="count">
    <h2>当前求和为{{ sum }}，放大十倍后{{ bigSum }}</h2>
    <h3>欢迎来到{{ school }}，坐落于{{ address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
  
<script setup lang="ts" name="Count">
import { ref, toRefs } from "vue";
import { storeToRefs } from "pinia";
//引入useCountStore
import { useCountStore } from "@/store/count";
//使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore();
//storeToRefs只会关注store中的数据，不会对方法进行ref包裹
const { sum, school, address, bigSum, upperSchool } = storeToRefs(countStore);
console.log(storeToRefs(countStore));

//以下两种方式都可以拿到state中的数据
// console.log(countStore.sum)
// console.log(countStore.$state.sum)
//数据
let n = ref(1); //用户选择的数字

//方法
function add() {
  //第一种修改方式
  // countStore.sum += 1;
  // countStore.school="aihdiwhf";
  // countStore.address="陆家嘴";

  //第二种修改方式
  // countStore.$patch({
  //   sum:888,
  //   school:'dadada',
  //   address:'上海'
  // })

  //第三种修改方式
  countStore.increment(n.value);
}
function minus() {
  countStore.sum -= 1;
}
</script>
  
  <style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>