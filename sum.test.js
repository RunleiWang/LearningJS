const axiosist = require("axiosist")
const server = require('./server')

function sum(a, b) {
    return a+b
}

test('sum should return 2 when sum(1,1)', () => {
    expect(sum(1,1)).toBe(2)
})

test('should create user successfully', async () => {
    let response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data).toEqual([])
    response = await axiosist(server).post('/users', {username: 'runlei'})
    expect(response.status).toBe(200)
    expect(response.data).toEqual({username: 'runlei'})
    response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data.length).toBe(1)
    expect(response.data[0].username).toEqual('runlei')
})

test('should delete user successfully', async () => {
    let response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data).toEqual([])
    response = await axiosist(server).post('/users', {username: 'runlei'})
    expect(response.status).toBe(200)
    expect(response.data).toEqual({username: 'runlei'})
    response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data.length).toBe(1)
    expect(response.data[0].id).toEqual(1)
    response = await axiosist(server).delete('/users/1')
    expect (response.status).toBe(200)
    response = await axiosist(server).get('/users')
    expect(response.status).toBe(200)
    expect(response.data).toEqual([])

})