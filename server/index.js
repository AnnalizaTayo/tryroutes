const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
//app.use('/admin',express.static(path.join(__dirname, '../admin/build/')));
app.use(express.static(path.join(__dirname, '../admin-side/build/')));

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
