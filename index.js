const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            break
        case '/about':
            path += 'about.html'
            break
        case '/contact':
            path += 'contact.html'
            break
        default:
            path += '404.html'
            break

    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})