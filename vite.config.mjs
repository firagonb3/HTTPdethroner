import { defineConfig } from 'vite'
import { config } from 'dotenv';
config();

export default defineConfig({
    server: {
        port: parseInt(process.env.PORT_VITE, 10)
    },
    root: "src/interface/",
})