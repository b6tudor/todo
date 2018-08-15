const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
    if(err){
        console.log('Error: ',err)
    }
const db = client.db('ToDoApp');
console.log('Connection Successful');

// db.collection('Todos').find({
//     _id: new ObjectID('5b744f37dab2c80abc4d046e')
// }).toArray().then((docs)=>{
//         console.log(JSON.stringify(docs,undefined,2));
//     },(err)=>{
//         console.log(err)
//     });

// db.collection('Todos').find().count().then((count)=>{
//         console.log(`Todos count: ${count}`);
//     },(err)=>{
//         console.log(err)
//     });
    

db.collection('Users').find({name:'Brad'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{console.log(err)});

    client.close();
});