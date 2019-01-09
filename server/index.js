const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("great!");
});

app.listen(port, ()=>{`Works on port ${port}`});