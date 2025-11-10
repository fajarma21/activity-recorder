import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/activity-recorder',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('antd')) return 'antd';
            return 'vendor';
          }
          return null;
        },
        chunkFileNames: 'assets/chunk-[name]-[hash].js',
      },
    },
  },
});
