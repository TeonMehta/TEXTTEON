// Imports
const express =             require('express');
const path =                require('path');
const mongoose =            require('mongoose');
const cors =                require('cors');
const bodyParser =          require('body-parser');
require('dotenv').config();
// Server Variables
const server =              express();

const url = 'mongodb://localhost:27017';
const port = process.env.PORT || 8888;
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors({ origin: true, credentials: true }));
server.use(express.json({ extended: false }));



//Connecting to MongoDB
const uri = process.env.ATLAS_URI;
const dbConnection = mongoose.connection;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,});
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => {
    console.log('CONNECTED TO MONGO DB');
});


const usersRouter = require('./src/routes/users');
const smartContactsRouter = require('./src/routes/smart_contacts');

server.use('/users', usersRouter);
server.use('/smartcontacts', smartContactsRouter);

server.listen(port, function () {
    console.log(`Server running on ${port}`);
});
