import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      data: path.resolve(__dirname, './src/data'),
      providers: path.resolve(__dirname, './src/providers'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
});
