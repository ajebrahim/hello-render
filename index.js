const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
