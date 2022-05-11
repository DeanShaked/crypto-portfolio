import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  plugins: [react()],
  server: {
    proxy: {
      // with options
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    }
  }

});
