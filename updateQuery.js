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
		

		collection.update({name:'Pale Green Apples'},{$set:{name:'Green Apples',color:'Green'}},function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log("%d doc updated",result.result.nModified);
			}
			dbase.close();
		});
		
		
	}
});