const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer'); 
const app = express();
app.use(express.json());   
app.use(cors());

directoryPath = path.join('../public/markdowns');

app.get('/api/getSubjects', (req, res) => {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        // const directoryContents = files.map((file) => ({
        //     name: file,
        //   }));
        // res.json(directoryContents);
        res.json(files);
    });
});

app.post('/api/getCourses', (req, res) => {
    const subject = req.body.subject;
    fs.readdir(directoryPath + '/' + subject, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.json(files);
    });
}); 

app.post("/api/getChapters", (req, res) => {
    const subject = req.body.subject;
    const course = req.body.course;
    fs.readdir(directoryPath + '/' + subject + '/' + course, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.json(files);
    });
});

const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
    // Access the uploaded file using req.file
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    // Move the uploaded file to the desired folder
    const file = req.file;
    const filePath = '../public/' + file.originalname;
  
    fs.rename(file.path, filePath, (err) => {
      if (err) {
        console.error('Error moving file:', err);
        return res.status(500).send('Error moving file.');
      }
  
      res.send('File uploaded and stored successfully.');
    });
});
  

app.listen(5000, () => console.log('Server started on port 5000'));