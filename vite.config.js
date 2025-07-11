import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../docs"
  },
  plugins: [
    tailwindcss(),
  ],
})