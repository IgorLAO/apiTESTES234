
const express = require('express');
const app = express();

const port = 4002;
app.get('/', (req, res) => res.send('viado gay kkkkkkkk'))

app.listen(port, '0.0.0.0',() => {
    console.log(`Server is running on http://localhost:${port}`);
})