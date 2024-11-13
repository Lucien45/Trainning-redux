import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // config port
  server: {
    port: 4200,
    strictPort: true,
    host: true,
    origin: "http://localhost:4200",
   },
})
