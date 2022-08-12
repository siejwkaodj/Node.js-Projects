const express = require('express');
const crypto = require('crypto');
const app = express();
const port = 3000;
app.use(express.static('web'));
app.listen(port, () => {
    console.log(`Server Running port ${port}`);
});

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/src/index.html');
})

app.get('/login', (req, res) => {
    console.log(req);
})