import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: process.env.NODE_ENV === 'production'
  ? '/port2024-vue-frame/'
  : '/'
})
