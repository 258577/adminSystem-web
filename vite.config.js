import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ElementPlus(),
  ],
  // // / ...
  // plugins: [
  //   // ...
  //   AutoImport({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  //   Components({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  // ],

  // resolve添加别名
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src"
      }
    ]
  }
})
