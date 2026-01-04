import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/last/', // ЭТО КРИТИЧЕСКИ ВАЖНО для GitHub Pages и стилей!
})
