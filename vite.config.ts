import path from "path";
import { defineConfig } from "vite";
// Type resolution for @vitejs/plugin-react can fail under some TS moduleResolution settings;
// suppress the TS error here or update tsconfig.json to use "moduleResolution": "node16" | "nodenext".
// @ts-ignore: module resolution mismatch for @vitejs/plugin-react
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
