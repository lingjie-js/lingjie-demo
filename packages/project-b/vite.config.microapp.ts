import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project-b/',
  plugins: [react()],
  build: {
    outDir: "../../dist/project-b"
  }
})