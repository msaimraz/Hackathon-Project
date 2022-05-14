const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 5000;
const port = 5000;

// Mongo DB
dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}
app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})