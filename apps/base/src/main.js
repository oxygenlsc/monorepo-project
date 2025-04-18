
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
import { QiankunRouter } from '@lisc/utils'
const app = createApp(App);
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun';
const isDev = true;
registerMicroApps([
  {
    name: 'child-one',
    entry: isDev ? '//localhost:5174' : '/childOne/', // 区分开发和生产环境
    container: '#mainContainer',
    activeRule: '/childOne',
    props: {
      router: new QiankunRouter('/childOne', router),
      basePath: '/childOne'
    }
  },
  {
    name: 'child-two',
    entry: isDev ? '//localhost:5175' : '/childTwo/', 
    container: '#mainContainer',
    activeRule: '/childTwo',
    props: {
      router: new QiankunRouter('/childTwo', router),
      basePath: '/childTwo'
    }
  }
]);

addGlobalUncaughtErrorHandler((event) => {
  console.error('全局错误处理:', event);
  // window.location.reload();
});
start({
    prefetch: 'all', 
    sandbox: {
        experimentalStyleIsolation: true // 启用样式隔离
      }
});
router.beforeEach(async (to, from, next) => {
  try {
    if (to.path !== from.path) {
      window.history.replaceState({ back: from.path }, to.name, '')
    }
  } catch (error) {
    console.error('路由错误:', error)
  }
  next()
})
// 添加全局路由错误监听

// router.afterEach((to, from) => {
//   window.history.replaceState({ current: to.path }, to.name, '')
// })
app.use(ArcoVue);
app.use(createPinia())
app.use(router)
app.mount('#app');
