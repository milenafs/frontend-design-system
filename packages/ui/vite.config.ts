import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    emptyOutDir: false,
    target: "esnext",

    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: (id) => {
        return id === "react" || id === "react-dom" || id.startsWith("react/");
      },
      output: {
        format: "es",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});