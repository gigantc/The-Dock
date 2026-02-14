import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendorFirebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          vendorTipTap: [
            '@tiptap/react',
            '@tiptap/starter-kit',
            '@tiptap/extension-link',
            '@tiptap/extension-task-list',
            '@tiptap/extension-task-item',
            '@tiptap/extension-placeholder',
            '@tiptap/html',
          ],
        },
      },
    },
  },
})
