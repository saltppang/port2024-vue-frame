import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/port2024-vue-frame/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
})
