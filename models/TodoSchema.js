const mongoose = require("mongoose");

const url = "mongodb+srv://raghu:4545454545@complaintdesk.7id4d.mongodb.net/complaintDesk?retryWrites=true&w=majority";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
mongoose.connect(url, options)
var db = mongoose.connection;
//handle mongo error
db.once('open', _ => {
    console.log('Database connected:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})

const todoSchema = new mongoose.Schema({
    title: {type: String,required: true},
    done: {type: Boolean},
    date: {type: Date,default: Date.now}
})

module.exports = mongoose.model('Todo',todoSchema);