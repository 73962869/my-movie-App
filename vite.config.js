import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-movie-App/',
  server: {
    open: true, // 자동 브라우저 열기
  },
})
