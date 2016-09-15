var express = require('express')
var multer = require('multer')

var app = express()
var upload = multer({ dest: "uploads/" });

app.use(express.static('public'));

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({size: req.file.size}));    
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});