// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());
// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
    if(err){
       return console.log(`Error: ${err}`);
       
    }
    console.log('connected to server');
    const db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     complete: false

    // },(err,res)=>{
    //     if(err){
    //         return console.log(`Error: ${err}` );
    //     }

    // console.log(JSON.stringify(res.ops,undefined,2));    
    // });

    // db.collection('Users').insertOne({
    //     name: 'Brad',
    //     age: '35',
    //     location: "Long Beach",
    // },(err,res)=>{
    //     if(err){
    //         return console.log(`Error: ${err}`);
    //     }
    //     console.log(res.ops[0]._id.getTimestamp());
    // });



    client.close();
});
 