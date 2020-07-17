var http = require('http');

http.createServer(function (req, res) {
    res.writehead(200, {'Content-Type': 'text/plain'});
    res.end('안녕하세요');
    
}).listen(9999);