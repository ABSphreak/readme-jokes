import express from 'express';
import apiHandler from './api';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS if needed
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API route
app.get('/api', apiHandler);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running! Try /api endpoint for jokes');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
