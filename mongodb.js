var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var newUserUrl = 'mongodb://localhost:27017';
MongoClient.connect (newUserUrl,function(err,dbase){

	if(err){
		console.log(err);

	}
	else{

		console.log('Connected to',newUserUrl);
		var database =  dbase.db('fruits');
		var collection= database.collection('apples')
		var doc1 = {name: 'red apples', color:'red'};
		var doc2 = {name:'green apples', color:'green'};

		collection.insert([doc1, doc2],function(err, res){
			if(err){
				console.log(err);
			}
			else{
				console.log('%d docs inserted', res.insertedCount);
			}
			dbase.close();
		});
		
	}
});