const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb://localhost:27017/?directConnection=true");
let usersCollection;
let NewItemid;
client.connect().then(() => {
    console.log("Connection Done");
    let db = client.db('ESTE');
     usersCollection = db.collection("Student");
    //Find element
    usersCollection.find({ FirstName: "Ayman" }).toArray()
        .then(users => {
            console.log("Users found:", users);
        })
        .catch(err => {
            console.log(err);
        });
})
.then(()=>{
    //create document 
    const documentToInsert = {
        FirstName: 'Zakaria',
        age: 30,
        LastName: 'Machmach',
      };
    usersCollection.insertOne(documentToInsert).then((res)=>{
                console.log("item : "+res.insertedId+"has been added to "+usersCollection.collectionName)
                NewItemid = { _id: ObjectId(res.iinsertedId) };
    })
    .catch(err => {
        console.log(err);
    });
})
.then(()=>{
     //Select All users 
     console.log("---All Students ---")
     usersCollection.find({}).toArray()
     .then(users => {
         console.log( users);
     })
     .catch(err => {
         console.log(err);
     });
})
.then(()=>{
    usersCollection.deleteOne(NewItemid);
})
.catch((err) => {
    console.log(err);
});

