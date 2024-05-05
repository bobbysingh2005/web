/* eslint-disable */

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: { host: "0.0.0.0", hot: true, port: 80 },
  outDir: "docs",
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
