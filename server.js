// server.js

const express = require('express');
const app = express();
const port = 3000;

// Serve your front-end HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/basic-server/index.html');
});

// Define a route to provide data to the front-end
app.get('/api/data', (req, res) => {
    // Replace this with your actual data retrieval logic
    const data = { message: 'Hello from the server!' };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
