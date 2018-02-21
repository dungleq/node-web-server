const MongoClient = require ('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('connected to mongodb server');
  db.collection('Users').insertOne({
    name:'Danny',
    age:40,
    location:'sydney'
  }, (err,result) => {
    if (err) {
      return console.log('Unable to insert users');
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  // db.collection ('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert Todos');
  //   }
  //   console.log(JSON.stringnify(result.ops, undefined, 2));
  // });
  db.close();
});
