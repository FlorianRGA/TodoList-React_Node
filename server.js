// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoutes = require("./routes/todoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à la base de données
mongoose
	.connect(process.env.MONGO_URI, {})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("non connecté"));

// Utilisation des routes
app.use("/todo", todoRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
