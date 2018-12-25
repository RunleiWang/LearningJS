const sqlite = require('sqlite')



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

