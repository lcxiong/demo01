import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//rem.ts
import '@/tool/rem'
//common.css
import '@/style/common.css'
//vant ui库
import Vant from 'vant';
import 'vant/lib/index.css';

let app = createApp(App);
//全局过滤器
app.config.globalProperties.$filters = {
    numFilter(params:number){
        return params.toFixed(2)
    }
}

app.use(store).use(router).use(Vant).mount('#app')
