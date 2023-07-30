const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up the storage for uploaded files
const storage = multer.diskStorage({
  destination: './Server_App/uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});

// Create the multer upload middleware
const upload = multer({ storage });

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.json({ message: 'No file uploaded.' });
  }

  // Do further processing with the uploaded file if needed
  // For example, you can save the file path to a database, etc.
  console.log("file uploaded");
  return res.json({ message: 'File uploaded successfully.' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
