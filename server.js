const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connect to database
connectDB();

//enable Middleware to access req.body
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

app.get('/', (req,res) => {
    res.send('HOME PAGE');
});

//define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, (req,res) => {
    console.log(`LISTENING ON PORT ${PORT}`);
})