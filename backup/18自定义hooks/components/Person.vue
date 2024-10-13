<template>
  <div class="person">
    <h2>当前求和为{{ sum }},放大十倍之后{{ bigSum }}</h2>
    <button @click="addSum">点我sum+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" alt="" />
    <hr />
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import useSum from "@/hooks/useSum";
import useDog from "@/hooks/useDog";
const { sum, addSum, bigSum } = useSum();
const { dogList, getDog } = useDog();
</script>

<style scoped>
button {
  margin: 0 5px;
}
img {
  height: 100px;
  margin-right: 10px;
}
</style>