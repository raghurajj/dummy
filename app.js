const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const todos = require('./routes/todos');

app.set("view engine", "ejs");
app.use("/static", express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req, res) => {
	res.send('Hello World!');
});

app.use('/todos',todos);

app.listen(3000, () => console.log("Server Up and running"));