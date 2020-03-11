const express =             require('express');
const path =                require('path');
const mongoose =            require('mongoose');
// Modules
const smartContactRouter =  require('./src/routes/smartContactRoutes');
const adminRouter =         require('./src/routes/adminRoutes');

const server = express();
const port = process.env.PORT || 3000;
const smartContactModel = require('./src/models/smartContactModel');



// Views
server.set('views','./src/views');
server.set('view engine', 'ejs');
//use Routes
server.use('/smartcontacts', smartContactRouter);
server.use('/admin', adminRouter);

//  BASE ROUTE
server.get('/', (req, res) => {
    res.render('index', {
        title: "TEXTTEON"
    });
});














// PORT
server.listen(port, function () {
    console.log(`Server running on ${port}`);
});