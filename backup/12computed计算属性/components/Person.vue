<template>
  <div class="person">
    姓：<input type="text" v-model="firstName" /> 名：<input
      type="text"
      v-model="lastName"
    />
    <button @click="changeFullname">修改fullName</button>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from "vue";

let firstName = ref("zhang");
let lastName = ref("三");

//这么定义的fullName是一个计算属性，且是只读的
// let fullName = computed(() => {
//   console.log(1);
//   return (
//     firstName.value.slice(0, 1).toUpperCase() +
//     firstName.value.slice(1) +
//     "-" +
//     lastName.value
//   );
// });

let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() +
      firstName.value.slice(1) +
      "-" +
      lastName.value
    );
  },
  set(val) {
    const [str1, str2] = val.split("-");
    firstName.value = str1;
    lastName.value = str2;
    console.log("set", val);
  },
});
function changeFullname() {
  fullName.value = "li-si";
  console.log(fullName.value);
}
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>