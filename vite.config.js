import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy dependencies into separate chunks
          chart: ['chart.js', 'react-chartjs-2'],
          pdf: ['jspdf'],
          icons: ['react-icons'],
        }
      }
    }
  }
})
