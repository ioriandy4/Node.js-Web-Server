const http = require('http')
const PORT = 8000
const app = require('../app.js')

const server = http.createServer(app)

server.listen(8000, () => {
    console.log(`listen 8000 ok`);
});