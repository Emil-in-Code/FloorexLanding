import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { vitePrerender } from 'vite-plugin-prerender'

export default defineConfig({
  plugins: [
    react(),
    // considerar importar los arrays y mapearlos.
    vitePrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/privacidad',
        '/cookies',
        '/legal',
        // Servicios —  slugs de ServiceDetail.js
        '/servicio/pisos-pulidos-abrillantados',
        '/servicio/pisos-deportivos',
        '/servicio/pisos-epoxicos',
        '/servicio/poliretano-cementicio',
        '/servicio/preparacion-superficies',
        '/servicio/señaletica-vial-industrial',
        // Productos —  slugs de MaquinariaDetail.js
        '/producto/pulidora-portatil',
        '/producto/aspiradora-industrial',
        '/producto/pulidora-control-remoto',
        '/producto/aspiradora-industrial-ivcl45l',
        '/producto/Rectificadora-de-suelo-gx550',
        '/producto/aspiradora-industrial-xingyi-ivc-v3',
      ],
    }),
  ],
  resolve:{
    alias:{
      "@": path.resolve(__dirname,"./src"),
    },
  },
});
