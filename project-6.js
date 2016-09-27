const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
const Url = 'mongodb://localhost:27017/' + dbName


mongo.connect(Url).then(db => {

      db.collection('users', (err, col) => {

          const query = { username: 'tinatime' }

          const delta = { $set: { age: 40 } }

})

...

        db.close();

    });
});
