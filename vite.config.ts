import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // {
      //   find: /^element-plus$/,
      //   replacement: path.resolve('./ele+/element-plus/es/index.mjs'),
      // },
    ],
  },
  plugins: [vue(), AutoImport({ imports: ['vue'] })],
})
