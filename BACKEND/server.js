const express = require('express');
var cors = require('cors')
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
const port = 3005;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_manager'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  connection.query('SELECT * FROM tasks', (error, results, fields) => {
    if (error) {
      console.error('Error getting tasks: ' + error.message);
      res.status(500).json({ error: 'Error getting tasks' });
      return;
    }
    res.json(results);
  });
});

// Create a new task
app.post('/tasks', (req, res) => {
  const { title, description, status } = req.body;
  connection.query('INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)', [title, description, status], (error, results, fields) => {
    if (error) {
      console.error('Error creating task: ' + error.message);
      res.status(500).json({ error: 'Error creating task' });
      return;
    }
    res.json({ id: results.insertId, title, description, status });
  });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { status } = req.body;
  connection.query('UPDATE tasks SET status = ? WHERE id = ?', [status, taskId], (error, results, fields) => {
    if (error) {
      console.error('Error updating task: ' + error.message);
      res.status(500).json({ error: 'Error updating task' });
      return;
    }
    res.json({ id: taskId, status });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  connection.query('DELETE FROM tasks WHERE id = ?', [taskId], (error, results, fields) => {
    if (error) {
      console.error('Error deleting task: ' + error.message);
      res.status(500).json({ error: 'Error deleting task' });
      return;
    }
    res.json({ id: taskId });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
