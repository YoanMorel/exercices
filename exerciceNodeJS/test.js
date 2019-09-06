var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {"Content-Type": "text/html"});
  if ('fname' in params && 'lname' in params) {
    res.write('Your first name is ' + params['fname'] + ' and you last name is ' + params['lname']);
  } else {
    res.write('Set your first name and your last name within the url adress.');
  }
  res.end();
});
server.listen(8080);
