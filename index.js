const express = require("express")
const server = express()
var users = [
    {
        username: 'John',
    }
]

server.get('/users', (request, response) => {
    response.json(users)
})

server.listen(3000)