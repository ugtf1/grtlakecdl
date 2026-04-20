import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    manifest: true,
    minify: 'terser',
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom')) return 'react-dom';
          if (id.includes('react-router-dom')) return 'router-vendor';
          if (id.includes('react-icons')) return 'ui-vendor';
          if (id.includes('react')) return 'react-vendor';
        },
      },
    },
  },
});
