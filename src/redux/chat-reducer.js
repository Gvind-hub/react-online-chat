import {chatAPI} from "../api/api";
import {removeSubObjectFromArray, updateSubObjectInArray} from "../Utils/object-helpers";

const GET_CHATS = 'GET_CHATS';
const GET_CURRENT_CHAT_NAME = 'GET_CURRENT_CHAT_NAME';


let initialState = {
    chat: '',
    currentChat: ''
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS:
            return {
                ...state,
                chat: action.chat,
            };
        case GET_CURRENT_CHAT_NAME:
            return {
                ...state,
                currentChat: action.currentChat,
            };
        default:
            return state;
    }
};

export const getChat = chat => ({type: GET_CHATS, chat});
export const getCurrentChat = currentChat => ({type: GET_CURRENT_CHAT_NAME, currentChat});

export const onAddMessage = (currentChat, chat, email, nickname, message) => async () => {
    try {
        if (currentChat === 'work') {
            await chatAPI.updateMessageFirebase({
                work: [...chat, {
                    email,
                    nickname,
                    message
                }]
            });
        } else {
                await chatAPI.updateMessageFirebase({
                    flud: [...chat, {
                        email,
                        nickname,
                        message
                    }]
                });
        }
    } catch (error) {
        console.log("Error on posting a message: ", error);
    }
}

export const onDeleteMessage = (currentChat, chat, index) => async () => {
    try {
        if (currentChat === 'work') {
            await chatAPI.updateMessageFirebase({
                work: removeSubObjectFromArray(chat, index)
            });
        } else {
            await chatAPI.updateMessageFirebase({
                flud: removeSubObjectFromArray(chat, index)
            });
        }
    } catch (error) {
        console.log("Error on deleting a message: ", error);
    }
}

export const onEditMessage = (currentChat, chat, index, message) => async () => {
    try {
        if (currentChat === 'work') {
            await chatAPI.updateMessageFirebase({
                work: updateSubObjectInArray(chat, index, {message})
            });
        } else {
            await chatAPI.updateMessageFirebase({
                flud: updateSubObjectInArray(chat, index, {message})
            });
        }
    } catch (error) {
        console.log("Error on editing a message: ", error);
    }
}

export default chatReducer;