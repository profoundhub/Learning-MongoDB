const mongo = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';
const age = process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) throw err;

  db.collection('parrots').count({
    age: {
      $gt: +age
    }
  }, function(err, count) {
    console.log(count);
    db.close();
  })
})

/*
    db.runCommand(
        {   count:'orders',
            query: { ord_dt:
                {
                    $gt: new Date('01/01/2012')
                }
            }
        }
    )
*/
