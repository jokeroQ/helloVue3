<template>
  <div class="person">
    <h2>需求：当水温达到60度，或者水位达到80cm时，给服务器发送请求</h2>
    <h2>当前水温：{{temp}}摄氏度</h2>
    <h2>当前水位：{{height}}cm</h2>
    <button @click="changeTemp">水温加10</button>
    <button @click="changeHeight">水位加10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, watch,watchEffect } from "vue";
//数据
let temp = ref(10);
let height = ref(10);
//方法
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}
//监视 ~~watch实现
// watch([temp,height],(value)=>{
//   //从value中获取最新的水温（newTemp）、最新的水位（newHeight）
//   let [newTemp,newHeight]=value
//   if(newTemp>=60||newHeight>=80){
//     console.log('给服务器发请求')
//   }
// })

//监视 ~~watchEffect实现
watchEffect(()=>{
  if(temp.value>=60||height.value>=80){
    console.log('给服务器发请求')
  }
})
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>