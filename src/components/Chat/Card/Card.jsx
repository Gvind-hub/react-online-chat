import React, {useEffect, useState} from 'react';
import ElasticInput from 'react-elastic-input';

import './Card.scss'
import placeholder from "../../../assets/img/userPlaceholder.svg";

const Card = ({message, onDeleteMessage, index, currentChat, chat, right, onEditMessage, users}) => {
    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState('');
    const onClickDelete = () => {
        onDeleteMessage(currentChat, chat, index)
    };
    const onFinishEdit = () => {
        onEditMessage(currentChat, chat, index, text);
        setEditMode(false);
    };
    useEffect(() => {
        setText(message.message);
    }, [message.message]);
    return (
        <div className={`card ${right}`}>
            <img className={`user-avatar card__user-avatar ${right}`}
                 src={users.filter(user => user.email === message.email)[0].photoURL ? users.filter(user => user.email === message.email)[0].photoURL : placeholder}
                 alt="user pic"/>
            <div className={`card__inner ${right}`}>
                <div className="card__top">
                    <p className="card__name">{message.nickname}</p>
                    <div className={`card__controls ${right}`}>
                        <button className="card__buttons" onClick={() => setEditMode(true)}>edit</button>
                        <span className="card__buttons-divider"> | </span>
                        <button className="card__buttons" onClick={onClickDelete}>delete</button>
                    </div>
                </div>
                <div className="card__text">
                    {editMode
                        ? <ElasticInput placeholder={text} type='text' className="card__text-editor" maxLength="150" autoFocus
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && onFinishEdit()}
                                    onBlur={onFinishEdit} />
                        : <p className="card__message">{message.message}</p>}
                </div>
            </div>
        </div>
    );
};

export default Card;
