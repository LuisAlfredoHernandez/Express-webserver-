const http = require('http');


http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'application/json' })

    let resObj = {
        nombre: 'Luis',
        edad: 21,
        url: req.url
    }

    res.write(JSON.stringify(resObj))
    res.end()

}).listen(6060);


console.log(`Listening on port: 6060 `);