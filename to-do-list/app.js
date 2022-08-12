const express = require('express');
const app = express();
const port = 3000;
// 서버 실행시 제일 먼저 실행됨.
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// web 폴더를 static으로 기억.
app.use(express.static('web'));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + "/web/index.html");
});