const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); 
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

app.listen(5000, () => console.log('Server started on port 5000'));