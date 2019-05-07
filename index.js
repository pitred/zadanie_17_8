var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="https://image.freepik.com/darmowe-wektory/szablon-sieci-web-b%C5%82%C4%85d-404-z-krowy-p%C5%82ywaj%C4%85ce-w-stylu-p%C5%82aski_23-2147777436.jpg" alt="404"/>');
        response.end();
    }
});
server.listen(8080);