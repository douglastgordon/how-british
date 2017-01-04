var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', (req, res, next) => {
  res.sendfile('./browser/index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});