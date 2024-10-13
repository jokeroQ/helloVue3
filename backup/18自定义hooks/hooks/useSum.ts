import { ref, reactive,computed } from "vue";
// https://dog.ceo/api/breed/pembroke/images/random
export default function () {
    //数据
    let sum = ref(0);
    let bigSum=computed(()=>{
        return sum.value*10
    })
    //方法
    function addSum() {
        sum.value++;
    }
    //给外部提供东西
    return { sum, addSum,bigSum }
}