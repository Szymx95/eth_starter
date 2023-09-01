import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }],
  },
  server: {
    port: 8000,
    open: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
})
