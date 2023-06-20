import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: './renderer/src',
  publicDir: '../public',
  plugins: [
    vue(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/src/main.ts',
        vite: {
          build: {
            outDir: 'electron/dist'
          }
        }
      },
    ]),
    renderer(),
  ],
})
