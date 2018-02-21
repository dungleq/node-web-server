const MongoClient = require ('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('connected to mongodb server');
  db.collection('Users').find({name:"Danny"}).count().then ((count, docs)=> {
    console.log(`Users count: ${count}`);
      }, (err)=>{
    console.log('Unable to fetch the docs', err);
  });
  // db.close();
});
