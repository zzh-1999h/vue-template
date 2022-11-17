// 自定义插件,解决main.ts中一直需要写app.use(xxx) 的问题
// 按需引入element-plus组件
import { App } from 'vue'
import 'element-plus/dist/index.css'
import { ElButton, ElTable } from 'element-plus'

const components = [ElButton, ElTable]

export default function (app: App): void {
  for (const component of components) {
    app.use(component)
  }
}
