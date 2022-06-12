import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    input: ['src/App.css'],
  },
  plugins: [react(), splitVendorChunkPlugin()],
});
