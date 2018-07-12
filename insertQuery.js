var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var newUserUrl = 'mongodb://localhost:27017';
MongoClient.connect (newUserUrl,function(err,dbase){
var faker = require('faker');
	if(err){
		console.log(err);

	}
	else{

		console.log('Connected to',newUserUrl);
		var database =  dbase.db('fruits');
		var collection= database.collection('objDatabase')
		

		 var obj = {
            name: faker.lorem.words(),
            author: faker.name.findName(),
            author_image: faker.image.avatar(),
            release_date: faker.date.recent(),
          
	        };
	         var obj1 = {
            name: faker.lorem.words(),
            author: faker.name.findName(),
            author_image: faker.image.avatar(),
            release_date: faker.date.recent(),
          
	        };
		collection.insert([obj,obj1],function(err, res){
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