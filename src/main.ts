import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerApp } from '../global'
import { setupStore } from './store'
import zzhRequest from './service'
import 'normalize.css'
const app = createApp(App)
registerApp(app)
setupStore(app)
app.use(router)
app.mount('#app')

// 测试用例
zzhRequest.request({
  url: '/newsqa/v1/query/inner/publish/modules/list',
  method: 'post'
})
