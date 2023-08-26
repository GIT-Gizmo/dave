import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
