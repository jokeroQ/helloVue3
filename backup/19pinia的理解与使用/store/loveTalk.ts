import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid';
// export const useTalkStore = defineStore('talk', {
//     actions: {
//         async getAtalk() {
//             let {
//                 data: { content: title },
//             } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//             //把请求回来的字符串，包装成一个对象
//             let obj = { id: nanoid(), title };
//             //放到数组中
//             this.talkList.unshift(obj);
//         }
//     },
//     //真正存储数据的地方
//     state() {
//         return {
//             talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//             // talkList: [
//             //     {
//             //         id: "sdhwuih",
//             //         title: "今天你有点怪。哪里怪，怪好看的",
//             //     },
//             //     {
//             //         id: "sdhwui4",
//             //         title: "草莓，蓝莓，蔓越莓，今天你想我了没？",
//             //     },
//             //     {
//             //         id: "sdhwu6h",
//             //         title: "心里给你留了一块地，我的死心塌地",
//             //     },
//             // ]
//         }
//     }
// })
import { reactive } from 'vue';
export const useTalkStore = defineStore('talk', () => {
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )
    // getATalk相当于action
    async function getAtalk() {
        let {
            data: { content: title },
        } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
        //把请求回来的字符串，包装成一个对象
        let obj = { id: nanoid(), title };
        //放到数组中
        talkList.unshift(obj);
    }
    return { talkList, getAtalk }
})