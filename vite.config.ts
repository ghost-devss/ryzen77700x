import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// IMPORTANTE: altere 'ryzen77700x' para o nome exato do seu repositório no GitHub
export default defineConfig({
  base: '/ryzen77700x/',
  plugins: [tailwindcss(), react()],
})
