import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Asegúrate de que esto sea correcto para tu ruta
  build: {
    outDir: 'dist', // Asegúrate de que esto coincida con lo que estás usando
  },
})

