import React from 'react';
import NavBar from "./NavBar/NavBar";
import ChatBody from "./ChatBody/ChatBody";

import './Chat.scss'



const Chat = ({chat, currentChat, onAddMessage, onDeleteMessage, nickname, email, onEditMessage, users}) => {
    return (
        <div className="chat">
            <NavBar/>
            <ChatBody chat={chat} onAddMessage={onAddMessage} onDeleteMessage={onDeleteMessage} nickname={nickname}
                      email={email} currentChat={currentChat} onEditMessage={onEditMessage} users={users} />
        </div>
    );
};

export default Chat;
