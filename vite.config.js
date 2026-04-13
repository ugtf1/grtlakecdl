import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    manifest: true,   // generate manifest.json
    rollupOptions: {
      input: resolve(__dirname, 'src/main.jsx')  // absolute path is safer
    }
  }
})
