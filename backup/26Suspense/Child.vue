<template>
    <div class="child">
        <h3>我是child组件</h3>
        <h3>当前求和为:{{ sum }}</h3>
    </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'
import axios from 'axios';
let sum=ref(0)
let {data:{content}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
console.log(content)
</script>

<style scoped>
.child{
    width: 200px;
    height: 150px;
    background-color: skyblue;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 0 5px ;
    text-align: center;
}

</style>