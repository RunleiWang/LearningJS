const express = require("express")
const server = express()
const db = require('./db.js')

server.use(express.json())

server.post('/users', async (request,response) => {
    let user = request.body
    db.createUser(user.username)
    response.json(user)
})

server.get('/users', async (request, response) => {
    let result = await db.getUsers()  // no await=> return a promise
    response.json(result)
})

server.delete('/users/:id',async (request, response)=>{
    let id = request.params.id
    let result = await db.deleteUser(id)
    response.json(result)
})

module.exports = server