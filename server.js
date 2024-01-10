const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());
app.use(express.static("web"));
 
app.listen(3000, () => { 
    console.log("Server is Running") 
}) 

app.post('/upload', function(req, res) {
    let file = req.files.sampleFile; // the uploaded file object
    res.json({ fileName: file.name }); //res.send(html string)
});