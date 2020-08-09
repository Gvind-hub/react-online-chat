import React, {useState} from 'react';

import './TextInput.scss'

const TextInput = ({onAddMessage, currentChat, nickname, email, chat}) => {
    const [text, onChangeText] = useState('');
    const onSend = e => {
        e.preventDefault();
        text && onAddMessage(currentChat, chat, email, nickname, text);
        onChangeText('')
    };

    return (
        <div className="text-input">
            <form className="text-input__form">
                <textarea className="text-input__textarea" rows="1" maxLength="150"
                          value={text} onChange={e => onChangeText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onSend(e)}/>
                <button className="text-input__button" onClick={onSend}>Отправить</button>
            </form>
        </div>
    );
};

export default TextInput;
