import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun'
// https://vite.dev/config/
let pastName = 'child-one'
export default defineConfig({
  base: '/childOne/',
  plugins: [
    vue(),
    qiankun('child-one',  // 微应用名字，与主应用注册的微应用名字保持一致
      { useDevMode: true }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5174, // 固定端口
    cors: true,
    origin: 'http://localhost:5174',
    proxy: {
      // 代理规则示例：将所有以 `/api` 开头的请求转发到目标服务器
      '/api': {
        target: 'http://dkn.cd-iot.cn', // 后端服务器地址
        changeOrigin: true, // 允许跨域
        // rewrite: (path) => path.replace(/^\/api/, ''), // 可选：重写路径（去掉 `/api` 前缀）
      },
      '/wecom': {
        target: 'http://dkn.cd-iot.cn', // 后端服务器地址
        changeOrigin: true, // 允许跨域
      },
    },
    build: {
    assetsDir: 'static',
    rollupOptions: {
      output: {
        library: `${pastName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${pastName}`
      }
    }
  }
  }
  
});
