import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Zargo",
        short_name: "Zargo",
        description: "Gestion intelligente des employés",
        theme_color: "#2563eb",
        background_color: "#f8fafc",
        display: "standalone",

        icons: [
          {
            src: "/zargo-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/zargo-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  server: {
    host: true,
  },
})