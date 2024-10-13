const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('D:/gg')));

app.get('/', function (req, res) {
    res.sendFile(path.join('D:/gg/index.html'))
});
app.get('/index', function (req, res) {
    res.sendFile(path.join('D:/gg/index.html'))
});

app.listen(3000, function () {
    console.log('Server listening on port http://localhost:3000/')
});