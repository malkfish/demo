const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', function(req, res) {
    res.send("Hello world!");
})

app.listen(port, () => console.log(`Server running on port ${port}`));