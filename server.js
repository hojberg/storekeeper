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

app.get("/orders/:number.json", function (req, res) {
  res.sendfile("json/orders/" + req.params.number + ".json");
});

var index = function (req, res) {
  res.sendfile('index.html');
};

// Genreate routes that return the index.html file
["/", "/orders", "/orders/:number"].forEach(function (route) {
  app.get(route, index);
});

app.listen(port, function () {
  console.log('Storekeeper server listening on ' + port);
});
