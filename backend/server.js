const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mocked data (in-memory for simplicity)
const departments = [
  { id: 1, name: 'Відділ фізичної культури', description: 'Керує програмами фізичного виховання в школах.' },
  { id: 2, name: 'Відділ спорту', description: 'Організує спортивні змагання та події.' }
];

const events = [
  { id: 1, title: 'Національні змагання з футболу', date: '2025-12-15', location: 'Київ' },
  { id: 2, title: 'Семінар з фізичного виховання', date: '2026-01-20', location: 'Львів' }
];

const resources = [
  { id: 1, title: 'Посібник з фізичної культури', url: '#' },
  { id: 2, title: 'Програма спортивних заходів', url: '#' }
];

// API endpoints
app.get('/api/departments', (req, res) => res.json(departments));
app.get('/api/events', (req, res) => res.json(events));
app.get('/api/resources', (req, res) => res.json(resources));

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});