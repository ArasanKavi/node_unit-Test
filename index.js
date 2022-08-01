//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('It works!')
})

//Launch listening server on port 3000
app.listen(3000, function () {
  console.log('Keep working!')
})
