import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { shipperIdsPlugin } from "./plugins/vite-plugin-shipper-ids";
import seoPrerender from "./vite-plugin-seo-prerender";

export default defineConfig({
  plugins: [seoPrerender(), shipperIdsPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    entries: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],

    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "@radix-ui/react-select",
      "@radix-ui/react-slot",
      "@radix-ui/react-alert-dialog",
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
    ],
  },
  server: {
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".modal.host", "shipper.now", "localhost", ".localhost"],
    hmr: {
      clientPort: 443,
      protocol: "wss",
      timeout: 30000,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
