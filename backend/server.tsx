const express = require('express');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Server running on port ${port}'));
app.use('/api/auth', authRoutes);