import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// https://github.com/electron-vite/vite-plugin-electron
// https://github.com/electron-vite/vite-plugin-electron-renderer

export default defineConfig({
  root: './renderer/src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  plugins: [
    vue(),
    electron([
      {
        entry: 'electron/src/main.ts',
        vite: {
          build: {
            outDir: 'electron/dist',
          },
        },
      },
    ]),
    renderer(),
  ],
});
