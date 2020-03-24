// Modules
const express =             require('express');
const path =                require('path');
const bodyParser =          require('body-parser');
const assert =              require('assert'); // TESTING
const { MongoClient } =     require('mongodb');
const { ObjectID } =        require('mongodb');
const mongoose =            require('mongoose');
const Routes =              require('./src/routes/routes');

const url =                 'mongodb://localhost:27017'; // URL TO CONNECT TO MONGO DB
const dbName =              'SMC';  // DB NAME
const server =              express(); // INSTANCE OF EXPRESS
const port =                process.env.PORT || 7000;
const collectionName =          "smart_contacts";
//const client =              new MongoClient(url); // MONGO CLIENT
// Views
server.set('views','./src/views');
server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));
server.use('/', Routes);
// TEST DATA
const testDocuments = [
    {   name:'name1',
        phone: 1,
        email: 'email1',
        industry: 'industry1',
        occupation: 'job1'
    },
    // {   name:'name2',
    //     phone: 3,
    //     email: 'email2',
    //     industry: 'industry2',
    //     occupation: 'job2'
    // },
    // {   name:'name3',
    //     phone: 3,
    //     email: 'email3',
    //     industry: 'industry3',
    //     occupation: 'job3'
    // },
];


// ADD DOCUMENTS TO DB
const insertDocuments = function (db, callback) {
    // get the documents collection
    const collection = db.collection('documents');

    collection.insertMany(testDocuments, function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log('Inserted 1 documents into the collection');
        callback(result);
    });
};
// FIND DOCUMENTS
const findDocuments = function (db, callback) {
    // GET THE SPECIFIC DOCUMENTS COLLECTION IN THE DB
    const collection = db.collection('documents');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log('Found the following docs');
        console.log(docs);
        callback(docs);
    });
};

// CONNECT TO THE SERVER
// client.connect(function (err) {
//     assert.equal(null, err);
//     console.log('Successfully connected to server');
//
//     const db = client.db(dbName);
//     findDocuments(db, () =>{});
//     client.close();
//     //insertDocuments(db, () =>{});
// });

server.listen(port, () =>{
    // MongoClient.connect(url, function (err, client) {
    //     assert.equal(null, err);
    //     client.close();
    //     const db = client.db(dbName);
    //     const collection = db.collection(collectionName);
    //     //console.log(client);
    // });
    console.log(`CONNECTED ON PORT => ${port}`);
});


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
    console.log('CONNECTED');
});








//
//
// //  BASE ROUTE
// server.get('/', (req, res) => {
//     res.render('index', {
//         title: "TEXTTEON"
//     });
// });


// Modules
// const smartContactRouter =  require('./src/routes/smartContactRoutes');
// const adminRouter =         require('./src/routes/adminRoutes');
// const smartContactModel = require('./src/models/smartContactModel');
//
// use Routes
// //server.use('/smartcontacts', smartContactRouter);
// // server.use('/admin', adminRouter);




// db.connect((err) =>{
//     if (err){
//         console.log('UNABLE TO CONNECT');
//         process.exit(1);
//     }
//     else {
//         server.listen(port, () => {
//             console.log(`CONNECT TO DATABASE ON PORT: ${port}`);
//         })
//     }
// });

// DATABASE ROUTE
// server.get('/database', (req, res) => {
//    db.getDB().collection(collection).find({}).toArray((err, documents) => {
//        if (err){
//            console.log(err)
//        }else {
//            console.log(documents);
//            res.json(documents);
//        }
//    });
// });

// server.put('/:id',(req, res)=> {
//     const smcID = req.params.id;
//     const userInput = req.body;
//
//     db.getDB().collection(collection).findOneAndUpdate(
//            {_id: db.getPrimaryKey(smcID)},
//            {$set : {smart_contacts: userInput.smart_contacts}},
//         {returnOriginal:false},
//         (err, result)=>{
//                if (err){
//                     console.log(err);
//                }
//                else{
//                     res.json(result);
//                }
//         })
// });

