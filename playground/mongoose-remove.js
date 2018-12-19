const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

/*Todo.deleteMany({}).then(result => {
  console.log(result);
});*/

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

/*Todo.findByIdAndDelete("5c1a64163f63f1413173c62e").then(todo => {
  console.log(todo);
});*/

Todo.findOneAndDelete({ _id: "5c1a64523f63f1413173c65d" }).then(todo => {
  console.log(todo);
});
