import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from "path";
// import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  ssr: {
    // outDir: 'dist/server',
    noExternal: ['pdfjs-dist', 'gsap'],
    // external: ['@notionhq/client']
  },
   define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['gsap', 'gsap/Draggable', '@notionhq/client'],
  },
    build: {
    outDir: 'dist/client',  // Client assets here
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
})
