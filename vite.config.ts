import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',
    // Raise warning threshold; chunks are intentionally split
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/yet-another-react-lightbox')) {
            return 'vendor-lightbox'
          }
        },
      },
    },
  },
})
