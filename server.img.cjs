require('dotenv').config();
const { textColor, colors } = require('./src/utils/CommonJS/textColor.cjs');

const express = require('express');
const path = require('path');
const app = express();
const PORT = parseInt(process.env.PORT_IMG, 10);
const HOST = process.env.HOST_IMG

app.use('/', express.static(path.join(__dirname, '/src/img')));

app.listen(PORT, () => {
    console.log('')
    console.log(textColor(colors.fgGreen, 'IMG loader server'))
    console.log('')
    console.log(`${textColor(colors.fgGreen, '  ➜ ')}Local:   ${textColor(colors.fgCyan,`http://${HOST}:${PORT}`)}`)
});
