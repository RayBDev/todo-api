const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    /* db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bd0ce6649dd013edfbeb06a")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(res => {
        console.log(res);
      }); */

    db.collection("Users")
      .findOneAndUpdate(
        {
          name: "Joe"
        },
        {
          $set: {
            name: "Ray"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(res => {
        console.log(res);
      });

    client.close();
  }
);
