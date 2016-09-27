const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const Url = 'mongodb://localhost:27014/' + dbName;
const users = db.collection('users');

mongo.connect(Url).then(db => {
  db.collection('users', (err, col) => {
    const query = { username: 'tinatime' }
    const changeAge = { $set: { age: 40 } }
    users.update(query, changeAge, (err, res) => {
      if (err) console.error(err);
      else console.log('updated');
      db.close()
    })
  })
  .catch(err => {
    console.error(err);
  })
})
