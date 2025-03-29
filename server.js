import express from "express";

const app = express();
const PORT = 3000 || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [
  { id: 1, tarea: "Practicar nodejs" },
  { id: 2, tarea: "Configurar jenkins" },
];

// Ruta TASKS
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Ruta TASK con ID
app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10); // Convertir el id a número
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
