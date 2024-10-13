<template>
    <div class="child">
        <h3>我是child组件{{ x }}</h3>
        <h3 v-beauty="sum">当前求和为:{{ sum }}</h3>
    <Hello />
    </div>
</template>

<script setup lang="ts" name="Child">
import {ref} from 'vue'
let sum=ref(0)
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