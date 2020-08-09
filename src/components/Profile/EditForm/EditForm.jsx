import React from 'react';
import {useForm} from "react-hook-form";

import './EditForm.scss'


const EditForm = ({setEditMode, user, updateUserProps}) => {
    const {handleSubmit, register, errors} = useForm({
        defaultValues: {
            id: user.id,
            fullName: user.fullName,
            nickname: user.nickname,
            photoURL: user.photoURL
        }
    });
    const onSubmit = value => {
        updateUserProps(user.email, value.fullName, value.id, value.nickname, value.photoURL, user.doc)
            .then(() => {
                setEditMode(false)
            })

    };

    return (
        <div className="edit-form">
            <form className="edit-form__form" onSubmit={handleSubmit(onSubmit)}>
                <label className="edit-form__label">
                    <b className="edit-form__label-name">ID: </b>
                    <input className="edit-form__input" type="number" ref={register({required: true})} name="id" placeholder='Ваш ID'/>
                    <p className="edit-form__error"
                       style={errors.id && errors.id.type === 'required' ? {visibility: "visible"} : {visibility: "hidden"}}>This field is
                        required</p>
                </label>

                <label className="edit-form__label">
                    <b className="edit-form__label-name">Полное Имя:</b>
                    <input className="edit-form__input" type="text" ref={register({required: true})}
                           name="fullName" placeholder='Ваше полное имя'/>
                    <p className="edit-form__error"
                       style={errors.fullName && errors.fullName.type === 'required' ? {visibility: "visible"} : {visibility: "hidden"}}>This field is
                        required</p>
                </label>

                <label className="edit-form__label">
                    <b className="edit-form__label-name">Ник:</b>
                    <input className="edit-form__input" type="text" ref={register({required: true})}
                           name="nickname" placeholder='Ваш ник'/>
                    <p className="edit-form__error"
                       style={errors.nickname && errors.nickname.type === 'required' ? {visibility: "visible"} : {visibility: "hidden"}}>This field is
                        required</p>
                </label>

                <label className="edit-form__label">
                    <b className="edit-form__label-name">Аватар:</b>
                    <input className="edit-form__input" type="url" name="photoURL" ref={register()} placeholder='Введите ссылку на фото'/>
                </label>
                <div className="edit-form__buttons">
                    <button className="edit-form__button" type="button" onClick={() => setEditMode(false)}>Отмена</button>
                    <button className="edit-form__button" type="submit">Сохранить</button>
                </div>

            </form>
        </div>
    );
};

export default EditForm;
