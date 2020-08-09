import React, {useRef, useEffect} from 'react';

import TextInput from "../TextInput/TextInput";
import Card from "../Card/Card";

import './ChatBody.scss'


const ChatBody = ({chat, onAddMessage, nickname, email, currentChat, onDeleteMessage, onEditMessage, users}) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        chat && currentChat && messagesEndRef.current.scrollIntoView({behavior: 'smooth'})
     };

    useEffect(() => {
        scrollToBottom()
    }, [chat, currentChat]);

    return (
        <div className="chat-body">
            <div className="chat-body__inner">
                <div className="messages">
                    {currentChat && chat && chat.map(
                        (message, index) => <Card message={message} key={index} onDeleteMessage={onDeleteMessage}
                                                  index={index} currentChat={currentChat} chat={chat}
                                                  onEditMessage={onEditMessage} users={users}
                                                  right={email === message.email ? 'right' : ''}/>)}
                    <div ref={messagesEndRef} style={{visibility: 'hidden'}}>last element</div>
                </div>
                {currentChat && <TextInput onAddMessage={onAddMessage} nickname={nickname}
                                           email={email} chat={chat} currentChat={currentChat}/>}
            </div>
        </div>
    );
};

export default ChatBody;
