import {
  IconHome,
  IconSettings,
} from '@arco-design/web-vue/es/icon';
 export const menus = [
  {
    path: '/childOne',
    title: '子应用1',
    key:'childOne',
    icon: IconHome,
    childrens: [
      {
        path: '/childOne/service-board',
        title: '服务看板',
        key:'service-board',
      },
      {
        path: '/childOne/path-two',
        title: '第二个路由',
        key:'path-two',
      },
    ],
  },
  {
    path: '/childTwo/test',
    title: '子应用2',
    key:'childTwo',
    icon: IconSettings,
  },
 ]