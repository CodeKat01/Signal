import React from 'react'
import "./chat.css"
import { Avatar , IconButton} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined, AttachFile,InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";



function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div class="chat_headerinfo">
                    <h3> Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div class="chat_headerright">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton> 
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
                <div class="chat_body">
                    <p className="chat_message">
                    <span className="chat_name">
                        Shuence
                    </span>  
                        This is a message                 
                    <span className="chat_timestamp">
                        {new Date().toLocaleString()}
                    </span>
                    </p>

                    <p className="chat_message chat_reciever">
                    <span className="chat_name">
                        Shuence
                    </span>  
                        This is a message                 
                    <span className="chat_timestamp">
                        {new Date().toLocaleString()}
                    </span>
                    </p>          
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
            <form>
                <input
                type="text" placeholder="Type a message"/>
                <button 
                type="submit">Send a message
                </button>
                </form>
                <MicIcon />
            </div>
    </div>
    )
}

export default Chat
