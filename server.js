const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

//connect to database
connectDB();

//enable Middleware to access req.body
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8000;

//define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

//Serve static asasets in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, (req,res) => {
    console.log(`LISTENING ON PORT ${PORT}`);
})