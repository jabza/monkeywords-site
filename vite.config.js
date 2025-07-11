import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  base: "/monkeywords-site/",
  build: {
    outDir: "../docs",
    emptyOutDir: true
  },
  plugins: [
    tailwindcss(),
  ],
})