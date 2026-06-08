//     tailwindcss(),
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [tailwindcss({ })],
    build: {
        rolldownOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                project1: resolve(import.meta.dirname, 'project-1/index.html'),
                project2: resolve(import.meta.dirname, 'project-2/index.html'),
                project3: resolve(import.meta.dirname, 'project-3/index.html'),
                project4: resolve(import.meta.dirname, 'project-4/index.html'),
                
            }
        },
    }

});