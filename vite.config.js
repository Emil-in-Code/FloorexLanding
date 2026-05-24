import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(async ({ command }) => {
  const plugins = [react()]

  // Solo importamos y ejecutamos el plugin si estamos compilando para producción
  if (command === 'build') {
    const vitePrerenderModule = await import('vite-plugin-prerender')
    // Maneja si se exportó por defecto o mediante .default debido al puente CJS/ESM
    const vitePrerender = vitePrerenderModule.default || vitePrerenderModule

    plugins.push(
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/privacidad',
          '/cookies',
          '/legal',
          '/servicio/pisos-pulidos-abrillantados',
          '/servicio/pisos-deportivos',
          '/servicio/pisos-epoxicos',
          '/servicio/poliretano-cementicio',
          '/servicio/preparacion-superficies',
          '/servicio/señaletica-vial-industrial',
          '/producto/pulidora-portatil',
          '/producto/aspiradora-industrial',
          '/producto/pulidora-control-remoto',
          '/producto/aspiradora-industrial-ivcl45l',
          '/producto/Rectificadora-de-suelo-gx550',
          '/producto/aspiradora-industrial-xingyi-ivc-v3',
        ],
      })
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
