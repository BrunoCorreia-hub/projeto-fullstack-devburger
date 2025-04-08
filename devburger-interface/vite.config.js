import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/projeto-fullstack-devburger/', // 👈 Isso é ESSENCIAL!
  plugins: [react()],
})
