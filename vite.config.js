//     tailwindcss(),
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [tailwindcss({ })],
    rolldownOptions: {
        input: {
            main: resolve(import.meta.dirname, 'index.html'),
            project2: resolve(import.meta.dirname, 'project2/index.html'),

        }
    },

});