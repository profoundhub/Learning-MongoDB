const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
		if (err) throw err;
		var users = db.collection('users');
		users.update({
			username: 'tinatime'
		},
		{
			$set: {
				age: 40
      }
		},
		function(err) {
			if (err) throw err;
			db.close();
		});
	});
