const express = require('express');
const app = express();
const port = 3000;
// ���� ����� ���� ���� �����.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// web ������ static���� ���.
app.use(express.static('web'));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/web/index.html");
});