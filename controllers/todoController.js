const Todo = require("../models/todo");

// Créer une nouvelle tâche
const createTodo = async (req, res) => {
	const { title, description } = req.body;
	const newTodo = new Todo({ title, description });

	try {
		await newTodo.save();
		res.status(201).json(newTodo);
	} catch (err) {
		res.status(400).json({ message: "POST NON VALIDE" });
	}
};

// Lire toutes les tâches
const getTodos = async (req, res) => {
	console.error("GetTodos func");
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (err) {
		res.status(500).json({ message: "Get not working" });
	}
};

// Mettre à jour une tâche
const updateTodo = async (req, res) => {
	const { title, description } = req.body;
	try {
		const todo = await Todo.findByIdAndUpdate(
			req.params.id,
			{ title, description },
			{ new: true }
		);
		res.status(200).json(todo);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

// Supprimer une tâche
const deleteTodo = async (req, res) => {
	try {
		await Todo.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Todo deleted" });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = {
	createTodo,
	getTodos,
	updateTodo,
	deleteTodo,
};
