import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    strictPort: true,
    port: 3001,
    cors: false,
  },
  plugins: [
    svelte(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {
        app4: {
          external: 'http://localhost:3004/remoteEntry.js',
          format: 'var',
          from: 'webpack',
        },
      },
      exposes: {},
      shared: [],
    }),
  ],
});
