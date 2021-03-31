const express = require("express");
const app = express.Router();
const dataRepo = require('../data/TodoData');

var todos = [{id:1, title:'go to library'}, {id:2, title:'meet Dr.Professor'}, {id:3, title:'Complete Node.js'}];

var complete = [];


app.get('/', function(req, res){
	dataRepo.findAll().then((todos)=>{
		res.render("todo", {todos:todos});
	}).catch((error) => console.log(error))
});

app.post('/', (req, res) => {
	dataRepo.create(req.body.newtodo).then((todo) => {
		res.redirect("/todos");
	}).catch((error) => console.log(error));
});

app.post("/:id", async(req, res) => {
	const todo = { done: req.body.done };
	await dataRepo.updateStatusById(req.params.id.substring(1),todo)
	.then(res.redirect("/todos"))
	.catch((error) => console.log(error));
});


module.exports = app