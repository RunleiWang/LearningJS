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
        console.log(users)
        var response = await axios.get('/users')
        console.log(response.data)
        setUsers(response.data)
    }

    return <div>
        <p>Create username:</p>
        <input onChange={handleChange}/>
        <button onClick={creatUser}>Create</button>
        {/*<ul>{users.map(*/}
            {/*function (user) {*/}
                {/*return <li>{user.username}</li>*/}
            {/*}*/}
        {/*)}</ul>*/}
        <Create users={users}/>
    </div>
}

async function deleteUser(index){
    var response = await axios.put('users', {index: index})
    console.log(users)
    var response = await axios.get('/users')
    console.log(response.data)
    setUsers(response.data)

}

function Create(props) {
    return      <ul>{props.users.map(
        function (user, index) {
            return <li>{user.username}
            <button onClick={()=>deleteUser(index)}>delete</button>
            </li>
        }
    )}</ul>
}

ReactDOM.render(
    <RL />, document.getElementById('root')
)
