import React, {useEffect} from 'react';
import {connect} from "react-redux";
import firebase from "firebase";
import {compose} from "redux";
import {useHistory, withRouter} from "react-router";

import {onAddMessage, getCurrentChat, onDeleteMessage, getChat, onEditMessage} from "../../redux/chat-reducer";

import Chat from "./Chat";


const ChatContainer = ({isAuth, onEditMessage, getCurrentChat, flud, work,
                           onAddMessage, onDeleteMessage, nickname, email, getChat, users}) => {
    const history = useHistory();
    const currentChat = history.location.pathname.split('/')[2]
    getCurrentChat(currentChat);

    useEffect(() => {
        !isAuth && history.push('/')
    }, [isAuth, history]);

    //Подписка и отписка на автообновление данных чата
    useEffect(() => {
        const unsubscribe = firebase
            .firestore().collection('chats')
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    snapshot.forEach(doc =>
                        getChat({ ...doc.data() })
                    )
                }
            });
        return () => {
            unsubscribe()
        }
    }, []);



    return <Chat chat={currentChat === 'work' ? work : flud} onAddMessage={onAddMessage} onEditMessage={onEditMessage} email={email}
                 nickname={nickname} currentChat={currentChat}
                 onDeleteMessage={onDeleteMessage} users={users}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    flud: state.chat.chat.flud,
    work: state.chat.chat.work,
    email: state.user.email,
    nickname: state.user.nickname,
    users: state.usersList.users
});


export default compose(
    connect
    (mapStateToProps,
    {getCurrentChat, onAddMessage, onDeleteMessage, getChat, onEditMessage}),
    withRouter)(ChatContainer);