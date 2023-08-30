const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/'){
        res.end('Hello! Welcome to our home page')
    }
    if(req.ulr === '/about'){
        res.end('here is our short history')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`
    )

})
console.log(server)

server.listen(3000)