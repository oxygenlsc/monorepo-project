
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'


let  app = null

function render(props = {}) {
    const { container } = props
    app = createApp(App)
    app.use(ArcoVue);
    app.use(createPinia())
    app.use(router)
    const root = container ? container.querySelector('#childTwo') : '#childTwo'
    app.mount(root)
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
      console.log('我正在作为子应用运行')
    }
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render()
  }
  
  // some code
renderWithQiankun({
  bootstrap: function (){
  },
  mount: function (props) {
    console.log('子应用mount')
    render(props)
  },
  unmount: function (props){
    app.unmount()
    app = null
  },
  update: function (props) { }
})




