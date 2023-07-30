const express = require('express');
const env = require('dotenv');
const formidable = require('formidable');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const form = formidable;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(bodyParser.json())
    .use(bodyParser.urlencoded());

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
  

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})