const http = require('http')
const handler = require('serve-handler')

const PORT = process.env.PORT ?? 3000

const server = http.createServer((request, response) => {
    return handler(request, response, {
        public: 'build',
    })
})

server.listen(PORT, () => {
    console.log('> Running on http://localhost:%s', PORT)
})
