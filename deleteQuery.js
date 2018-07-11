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
		var collection= database.collection('objDatabase')
		

		collection.deleteOne({name:'Green Apples'},function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log("%d doc deleted",result.result.n);
			}
			dbase.close();
		});
		
		
	}
});