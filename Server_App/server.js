const express = require('express');
const env = require('dotenv');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const uploadDirectory = path.join(__dirname, 'uploads');


if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}


app.get('/', (req, res) => {
  res.send(`
    <h2>File Upload Medis</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post('/api/upload', (req, res, next) => {
  
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      
      return res.status(500).send('An error occurred while parsing the form data.');
    }

    const file = files.uploadedFile;

    
    const oldPath = file.path;
    const newPath = path.join(uploadDirectory, file.name);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        return res.status(500).send('An error occurred while saving the file.');
      }

    return res.status(200).send('File uploaded and stored successfully.');
    
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})