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

async function getUsers() {
    const db = await dbPromise
    let result = await db.all(`
        SELECT * FROM users
    `)
    return result
 }

 async function createUser(username){
     const db = await dbPromise
     db.run(`
        INSERT INTO users
            (username)
        VALUES ('${username}')
    `)

 }

 async function deleteUser(id){
     const db = await dbPromise
     db.run(`
        DELETE FROM users
        WHERE id = ${id}
    `)
 }


 module.exports = {
     getUsers,
     createUser,
     deleteUser
 }


// ;(async () => {
//     const db = await sqlite.open(':memory:')
//
//     await db.run(`
//         CREATE TABLE IF NOT EXISTS users (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             username VARCHAR(255) NOT NULL
//         )
//     `)
//
//     const result = await db.run(`
//         INSERT INTO users
//             (username)
//         VALUES ('Run lei')
//     `)
//
//     console.log(result.stmt.lastID)
//
//     const result2 = await db.all(`
//         SELECT * FROM users
//     `)
//
//     console.log(result2)
//
//     const result3 = await  db.run(`
//         DELETE FROM users
//         WHERE id = 1
//     `)
//     console.log(result3)
// })()

