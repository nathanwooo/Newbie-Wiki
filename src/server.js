const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

directoryPath = path.join('../public/markdowns');
app.get('/api/getSubjects', (req, res) => {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        const directoryContents = files.map((file) => ({
            name: file,
          }));
        res.json(directoryContents);
    });
});

app.listen(5000, () => console.log('Server started on port 5000'));