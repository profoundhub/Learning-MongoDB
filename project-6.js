const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const Url = 'mongodb://localhost:27014/' + dbName;
const users = db.collection('users');

mongo.connect(Url, (err, db) {

   users.update({
			username: 'tinatime'
		}, {
			$set: {
				age: 40
			}
		}, function(err) {
			if (err) throw err;
			db.close();
		})

})
