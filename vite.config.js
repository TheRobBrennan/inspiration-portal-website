import { defineConfig } from 'vite'
import { htmlInjectionPlugin } from 'vite-plugin-html-injection'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlInjectionPlugin({
      // example injections
      injections: [
        {
          // optional injection name
          name: "Open Graph",
          // path to the code snippet file relative to Vite project root
          path: "./src/injections/open-graph.html",
          // optional code snippet type: raw | js | css
          type: "raw",
          // where to inject: head | body | head-prepend | body-prepend
          injectTo: "head",
        },
      ],
    }),
  ],
})
