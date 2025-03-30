import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database('./tasks.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  console.log('Connected to SQLite database');
  
  // Create tasks table if it doesn't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT 0
    )
  `);
});

// API Endpoints
app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  db.run(
    'INSERT INTO tasks (title, description) VALUES (?, ?)',
    [title, description],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({
        id: this.lastID,
        title,
        description,
        completed: false
      });
    }
  );
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  if (!title) {
    res.status(400).json({ error: 'Title is required' });
    return;
  }

  db.run(
    'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?',
    [title, description, completed ? 1 : 0, id],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: Number(id), title, description, completed });
    }
  );
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 