const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
const Url = 'mongodb://localhost:27017/' + dbName


    mongo.connect(Url).then(db => {

        db.collection('users', (err, col) => {

            const query = { username: 'tinatime' }

            const delta = { $set: { age: 40 } }

          col.update(query, delta, (err, res) => {
               if (err) console.error(err);
               else console.log('updated');
               db.close();
           });
       });
       .catch(err => { console.error(err) })
   })
