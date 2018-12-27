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
        let response = await axios.get('/users')
        setUsers(response.data)
    }, [])

    async function CreateUser(){
        await axios.post('users', {username: nameInput})
        let response = await axios.get('/users')
        setUsers(response.data)
    }

    return <div>
        <p>Create username:</p>
        <input onChange={handleChange}/>
        <button onClick={CreateUser}>Create</button>
        <UserList users={users} setUsers={setUsers} />
    </div>
}

function UserList(props) {
    console.log(props.users)

    async function deleteUser(id){
        await axios.delete('users/' + id)
        let response = await axios.get('/users')
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
