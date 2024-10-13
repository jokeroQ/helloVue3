//引入createApp用于创建应用
import { createApp } from "vue";
//引入App根组件
import App from "./App.vue";
import Hello from "./Hello.vue";

//创建一个应用
const app = createApp(App)
app.component('Hello', Hello)
app.config.globalProperties.x = 99
declare module 'vue' {
    interface ComponentcustomProperties {
        x: number
    }
}
app.directive('beauty', (element, { value }) => {
    element.innerText += value
    element.style.color = 'green'
    element.style.backgroundColor = 'yellow'
})
//挂载整个应用到app容器中
app.mount("#app")

setTimeout(() => {
    app.unmount()
}, 2000);