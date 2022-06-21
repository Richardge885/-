// require modules express server, body-parser for html input
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set(express.static(__dirname + 'public'));

// homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/date', (req, res) => {
  res.send(req.body.date);
});


// listen port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

