const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.send('HOME PAGE');
});

app.listen(PORT, (req,res) => {
    console.log(`LISTENING ON PORT ${PORT}`);
})