import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "sqr-s6",
    project: "javascript-react"
  })],

  server:{
    host: '0,0,0,0',
    port:5173,
  },

  build: {
    sourcemap: true
  }
})