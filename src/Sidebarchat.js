import React from 'react'
import "./sidebarchat.css"
import { Avatar } from "@material-ui/core";


function Sidebarchat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat_info">
                <h2>Room Name</h2>
                <p>This is last message</p>

            </div>


        </div>
    )
}

export default Sidebarchat
