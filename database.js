const {MongoClient} = require('mongodb');
const {ObjectID} = require('mongodb');
const dbName = 'textteon';
const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser: true};
const collection = "smart_contacts";





























//
// const state = {
//     db : null
// };
// const connect = (callback) => {
//   if (state.db){
//       callback();
//   }
//   else{
//       MongoClient.connect(url, mongoOptions, (err, client) => {
//           if(err){
//               callback(err);
//           }
//           else{
//                 state.db = client.db(dbName);
//                 callback();
//           }
//       });
//   }
// };
//
// const getPrimaryKey = (_id) => {
//     return ObjectID(_id);
// };
// const getDB = () => {
//   return state.db;
// };

//module.exports = {getDB, connect, getPrimaryKey};