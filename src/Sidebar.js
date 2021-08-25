import React from "react"
import "./sidebar.css"
import Sidebarchat from "./Sidebarchat"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <div class="sidebar_header">
                <Avatar src="https://bit.ly/3gsNSWw"/>
                <div class="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

                <div class="sidebar__search">
                    <div class="sidebar__searchContainer">
                        <SearchOutlined/>
                        <input placeholder="Search or Start New Chat" type="text" />
                    </div>
                </div>
            <div class="sidebar_chats">
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
            </div>
        </div>
    )
}

export default Sidebar