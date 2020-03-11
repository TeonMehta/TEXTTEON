const express = require('express');
const adminRouter = express.Router();
const {MongoClient} = require('mongodb');

const smartContacts = [
    {
        name: "name",
        telephone: 1234567,
        email: "email"
    },
    {
        name: "name2",
        telephone: 1234567,
        email: "email2"
    },
    {
        name: "name3",
        telephone: 1234567,
        email: "email3"
    },
    {
        name: "name4",
        telephone: 1234567,
        email: "email4"
    },
    {
        name: "name5",
        telephone: 1234567,
        email: "email5"
    }
];

adminRouter.route('/')
    .get((req, res) => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'textteon';

        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(url);
                console.log('Connected to mongo');

                const db = client.db(dbName);
                const response = await db.collection('smart_contacts').insertMany(smartContacts);
                res.json(response);
            } catch (err) {
                console.log(err.stack);
            }
            client.close();
        }());
    });



module.exports = adminRouter;