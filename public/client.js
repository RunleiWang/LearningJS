//import React from 'react'
const React = require('react')
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'babel-polyfill'

//component
function Users(){
    const [users,setUsers] = React.useState([])  //react var
    const [nameInput, setNameInput] = React.useState()

    function handleChange(e) {
        setNameInput(e.target.value)
    }

    React.useEffect(async () => {
        var response = await axios.get('/users')
        setUsers(response.data)
    }, [])

    async function creatUser(){
        await axios.post('users', {username: nameInput})
        console.log(users)
        var response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }

    return <div>
        <p>Create username:</p>
        <input onChange={handleChange}/>
        <button onClick={creatUser}>Create</button>
        <CreateUser users={users} setUsers={setUsers} />
    </div>
}

function CreateUser(props) {
    async function deleteUser(id){
        await axios.delete('users/' + id)
        var response = await axios.get('/users')
        console.log(response.data)
        props.setUsers(response.data)
    }

    return <ul>{props.users.map(
        function (user) {
            return <li>{user.username}
            <button onClick={()=>deleteUser(user.id)}>delete</button>
            </li>
        }
    )}</ul>
}

ReactDOM.render(
    <Users />, document.getElementById('root')
)
