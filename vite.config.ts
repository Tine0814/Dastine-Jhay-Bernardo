import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "404.html", // Source file
          dest: "", // Destination in the dist folder
        },
      ],
    }),
  ],
  base: "/Dastine-Jhay-Bernardo",
});
