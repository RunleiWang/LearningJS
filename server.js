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

server.get('/',(request,response) => {
    response.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>123</h1>
<script>
  //  fetch('/users').then(response => {return response.json()}).then(response =>{document.write(response[0].username)})
</script>
</body>
</html>
    `)
})

module.exports = server