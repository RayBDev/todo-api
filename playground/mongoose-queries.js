const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

let id = "5c101d7eca1f9c19b213d9ab";

if (!ObjectID.isValid(id)) {
  console.log("Id not valid");
}

Todo.find({
  _id: id
}).then(todos => {
  console.log("Todos", todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log("Todo", todo);
});

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo By Id", todo);
  })
  .catch(err => console.log(err));

User.findById("5c102e6bee440720e51be10e")
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log("User By Id", user);
  })
  .catch(err => console.log(err));
