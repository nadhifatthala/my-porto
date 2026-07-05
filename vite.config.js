import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // <-- 1. Tambahkan import ini

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // <-- 2. Letakkan di paling atas dalam array plugins
    react(),
    babel({
      presets: [reactCompilerPreset()]
    })
  ]
})