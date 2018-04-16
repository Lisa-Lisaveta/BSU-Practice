var express = require('express');
var app = express();

app.use(express.static('public'))


app.listen(1984, function () {
  console.log('listening on port 1984');
});

app.use((req, res) => {
    res.send("oops, an error occured");
})