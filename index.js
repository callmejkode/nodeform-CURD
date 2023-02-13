const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//connect to DB
mongoose.connect(
    process.env.DB_CONNECT , 
    {useUnifiedTopology: true, userNewUrlParsers: true}, 
    ()=>console.log('Connected to database')
)

const port = 5000;
app.listen(port , ()=>console.log(`App listening on port ${port}!`));