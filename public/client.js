//import React from 'react'
const React = require('react')
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'babel-polyfill'


var user

async function getUsers(){
    axios.get('/users')
}

function handleChange(e) {
    user = e.target.value
}
//component
function RL(){

    const [users,setUsers] = React.useState([])  //react var
    console.log('new user',users)

    async function creatUser(){
        var response = await axios.post('users', {username: user})
        // users.push(response.data)
        // setUsers(users)
        console.log(users)
        var response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }
    return <div>
        <input onChange={handleChange}/>
        <p>Runlei Wang</p>
        <button onClick={creatUser}>Create</button>
        {/*<ul>{users.map(*/}
            {/*function (user) {*/}
                {/*return <li>{user.username}</li>*/}
            {/*}*/}
        {/*)}</ul>*/}
        <Create users={users}/>
    </div>

}

function Create(props) {
    return      <ul>{props.users.map(
        function (user) {
            return <li>{user.username}</li>
        }
    )}</ul>
}

ReactDOM.render(
    <RL />, document.getElementById('root')
)
