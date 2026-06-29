const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to VideoVerse API');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`VideoVerse server running on port ${PORT}`);
});