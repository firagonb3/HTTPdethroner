import { defineConfig } from 'vite'
import { config } from 'dotenv';
config();

console.log('   ➜  Vite initialized successfully!')
export default defineConfig({
    server: {
        port: parseInt(process.env.PORT_VITE, 10)
    },
    root: "src/interface/",
})