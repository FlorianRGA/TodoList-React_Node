// routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Définition des routes
router.post("/create", todoController.createTodo); // Créer une tâche
router.get("/todos", todoController.getTodos); // Lire toutes les tâches
router.put("/:id", todoController.updateTodo); // Mettre à jour une tâche
router.delete("/:id", todoController.deleteTodo); // Supprimer une tâche

module.exports = router;
