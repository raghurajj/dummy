const express = require("express");
const app = express.Router();

var todos = [{id:1, title:'go to library'}, {id:2, title:'meet Dr.Professor'}, {id:3, title:'Complete Node.js'}];

var complete = [];


app.get('/', function(req, res){
	res.render("todo", { todos: todos, complete: complete});
});

app.post('/', function (req, res) {
	var newTodo = req.body.newtodo;
	todos.push({id: todos.length+1, title:newTodo});
	res.redirect("/todos");
});

app.post("/:id", function(req, res) {
	var completeTodoId = req.params.id.substring(1);
	//find the index of the selected todo to be removed
	var index = todos.findIndex(obj => obj.id==completeTodoId);
	var completedTodo = todos[index];
	//move the removed to-do to complete list
	complete.push(completedTodo);
	//remove the completed to-do from the todos array
	todos.splice(index, 1);
	res.redirect("/todos");
});


module.exports = app