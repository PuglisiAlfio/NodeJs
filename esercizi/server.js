const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    console.log('request ricevuta')
    fs.readFile('inx.html', (err, data) => {
        if(err){
            response.writeHead(500, {'Content-Type': 'text/plain'})
            response.end('Erroraccio');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        }
    })
});

server.listen(3000, () => {
    console.log('listening')
})