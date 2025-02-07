// filepath: /c:/Users/asus/Desktop/2ºDAW/DESARROLLO ENTORNO WEB CLIENTE/ProyectoPokeApp/ProyectoPokeApp/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      
    }
  }
});