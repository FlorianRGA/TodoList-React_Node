const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: String,
});

const Task = mongoose.model("Todo", todoSchema);

module.exports = Task;
