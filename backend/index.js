const express = require('express');
const cors = require('cors');
const data = require('./data/membershipData.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Connected.');
});

app.get('/memberships', (req, res) => {
    res.json(data);
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001/');
});