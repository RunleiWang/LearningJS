//const server = require('./server')
//server.listen(3000)

import React from 'react'
import ReactDOM from 'react-dom'

//component
function RL(){
    return <div>
            <ul id="ul">
                <li className="item">runlei</li>
                <li className="item">runlei</li>
                <li className="item">runlei</li>
                <li className="item">runlei</li>
            </ul>
            <p>Runlei Wang</p>
        <RN/>
    </div>

}

function RN(){
    return  <p>llll</p>

}

ReactDOM.render(
    <RL />, document.getElementById('root')
)
