import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].css",
        chunkFileNames: "[name].[exp]",
      },
    },
  },
});
