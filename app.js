// require modules express server, body-parser for html input
const express = require('express');
const bodyParser = require('body-parser');
const { Solar } = require('lunar-javascript')

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 取四柱
function getSizhu(year, month, day) {
  let solar = Solar.fromYmd(year, month, day);
  return solar;
}

app.post('/date', (req, res) => {
  let date = req.body.date;
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8);
  let i = getSizhu(year, month, day).getLunar();
  res.send(i._p.dayGanIndexExact);
});

// listen port
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
