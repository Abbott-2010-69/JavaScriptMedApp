const express = require('express');
const path = require('path');
const app = express();




app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.send('ok');
});


const port = 5500;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
