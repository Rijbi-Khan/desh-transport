import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true // এটি ngrok এর যেকোনো নতুন বা পুরাতন লিংক অটোমেটিক এলাউ করবে
  }
})