<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>哥哥给的玩具{{ toy }}</h4>
  </div>
</template>
  
  <script setup lang="ts" name="Child1">
import { onUnmounted, ref } from "vue";
import emitter from "@/utils/emitter";
let computer = ref("联想");
let toy = ref("");
//给emitter绑定send-toy事件
emitter.on("send-toy", (value:any) => {
  console.log("%c Line:14 🍞 send-toy", "color:#3f7cff", "send-toy", value);
  toy.value = value;
});
//在组件卸载的时候解绑send-toy事件
onUnmounted(()=>{
  emitter.off('send-toy')
})
</script>
  
  <style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>