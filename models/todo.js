const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: String,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
