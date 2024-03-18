const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';

const dbname = 'task-4-connection';

mongoClient.connect (connectionUrl , (error , client)=>{
  if (error) {
      return console.log('error has occured')
  }
  console.log('Connection success');

  // store database object from client in the global variable
  const db = client.db(dbname);

  // insert one data
  db.collection('users').insertOne({
    name: 'Aliaa',
    age: 22,
    city: 'Assuit'
  }, (error, result) => {
    if (error) {
      return console.log('Unable to insert');
    }
    console.log(result.insertedId);
  })

  // insert many data
  db.collection('users').insertMany([
    {
      name: 'Ahmed',
      age: 40,
      city: 'Cairo'
    }, {
      name: 'Ali',
      age: 8,
      city: 'Assuit'
    }, {
      name: 'Ziad',
      age: 22,
      city: 'Alex'
    }, {
      name: 'Reem',
      age: 26,
      city: 'Assuit'
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert');
    }
    console.log(result.insertedCount);
  })

  // find one data by id
  db.collection('users').findOne({ 
    _id: new mongodb.ObjectId("65f89bdb96a1b3ed65b2daaf")
   }, (error, user) => {
    if (error) {
      return console.log('Unable to insert');
    }
    console.log(user);
  })

  // find many data with condition
  db.collection('users').find({
    age: 22
  }).toArray((error, users) => {
    if (error) {
      return console.log('Unable to insert');
    }
    console.log(users);
  })

  // count users in db
  db.collection('users').find().count((error, count) => {
    if (error) {
      return console.log('Unable to insert');
    }
    console.log(count);
  })
})







