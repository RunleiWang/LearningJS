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

server.delete('/users/:id',(request, response)=>{
    var index = request.params.id
    console.log(index);
    users = users.filter((user, i) => i != index)
    response.json(null)
})

module.exports = server