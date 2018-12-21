const express = require("express")
const server = express()

server.use(express.json())

var users = []

server.post('/users', (request,response) => {
    var user = request.body
    users.push(user)
    response.json(user)
})

server.get('/users', (request, response) => {
    response.json(users)
})

server.put('/users',(request, response)=>{
    var user = request.body
    users.slice(user,1)
    response.json(user)
})

module.exports = server