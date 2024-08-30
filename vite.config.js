// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        nested: resolve(__dirname, 'public/index.html'),
      },
    },
  },
})