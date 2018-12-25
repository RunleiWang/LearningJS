const express = require("express")
const server = express()
const sqlite = require('sqlite')

const dbPromise = (async () => {
    const db = await sqlite.open(':memory:')
    await db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(255) NOT NULL
        )
    `)
    return db
})()

server.use(express.json())

server.post('/users', async (request,response) => {
    const db = await dbPromise
    let user = request.body

    db.run(`
        INSERT INTO users
            (username)
        VALUES ('${user.username}')
    `)
    response.json(user)
})

server.get('/users', async (request, response) => {
    const db = await dbPromise
    let users = await db.all(`
        SELECT * FROM users
    `)

    response.json(users)
})

server.delete('/users/:id',async (request, response)=>{
    let id = request.params.id
    console.log(id);
    const db = await dbPromise
    db.run(`
        DELETE FROM users
        WHERE id = ${id}
    `)
    response.json(null)
})

module.exports = server