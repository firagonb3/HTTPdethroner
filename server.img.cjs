require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = parseInt(process.env.PORT_IMG, 10);
const HOST = process.env.HOST_IMG

app.use('/', express.static(path.join(__dirname, '/src/img')));

app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}`);
});
