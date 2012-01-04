var express = require('express'),
    app    = express.createServer(),
    port   = process.env.PORT || 4000,
    pubDir = __dirname + '/public';

app.configure(function () {
  app.use(express.static(pubDir));
});

app.get("/orders.json", function (req, res) {
  res.sendfile("json/orders.json");
});

app.get('*', function (req, res) {
  res.sendfile('index.html');
});

app.listen(port, function () {
  console.log('Storekeeper server listening on ' + port);
});
