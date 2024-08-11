import { defineConfig,loadEnv} from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import usePluginImport from "vite-plugin-importer";
import { resolve } from 'path'

// 引入自动导入 api
import AutoImport from 'unplugin-auto-import/vite'
// 引入配置需要自动导入的组件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(( mode :ConfigEnv): any => {
  const env = loadEnv(mode.mode, process.cwd());
  return {
    base: env.VITE_APP_ORIGIN,
    plugins: [
      vue(),
      usePluginImport(),
      AutoImport({
        // 配置需要自动导入的模块
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/auto-import.d.ts',
      }),
      // 配置需要自动导入的组件
      Components({
        // 导入存放的位置
        dts: false,
        resolvers: [ElementPlusResolver()],
        directoryAsNamespace: true
      }),
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
       // 本地运行配置，及反向代理配置
       server: {
        cors: true, // 默认启用并允许任何源
        open: true, // 在服务器启动时自动在浏览器中打开应用程序
        host: "0.0.0.0",
        port: 3200,
        strictPort: false, // 端口如果被占用强制退出
        https: false,
        optimizeDeps: true, // 强制预构建插件包
        //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
        proxy: {}
      }
  }
})

