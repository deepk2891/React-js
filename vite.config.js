import react from '@vitejs/plugin-react';

export default {
  plugins: [ react() ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
};
