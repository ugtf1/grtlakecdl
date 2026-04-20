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
        manualChunks: (id) => {
          if (id.includes('react') && !id.includes('react-router')) return 'react-vendor';
          if (id.includes('react-router')) return 'router-vendor';
          if (id.includes('react-icons')) return 'ui-vendor';
        },
      },
    },
  },
});
