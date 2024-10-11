const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src', 'web-app')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'web-app', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});