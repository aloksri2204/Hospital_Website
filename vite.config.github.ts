import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  define: {
    'import.meta.env.VITE_STATIC_BUILD': JSON.stringify('true'),
  },
})