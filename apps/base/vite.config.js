import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173, // 固定端口
    cors: true,
    origin: 'http://localhost:5173',
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
  },
  build: {
    assetsDir: 'static', // 静态资源目录
    rollupOptions: {
      output: {
        entryFileNames: `static/[name].[hash].js`,
        chunkFileNames: `static/[name].[hash].js`,
        assetFileNames: `static/[name].[hash].[ext]`
      }
    }
  }
});
