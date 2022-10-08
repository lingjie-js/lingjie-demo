import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
      name: "shard",
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    },
  }
})


