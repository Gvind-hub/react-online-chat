import React from 'react';

import './ProfileData.scss'


const ProfileData = ({setEditMode, user}) => {
    return (
        <div className="profile-data">
            <div className="profile-data__element">
                <b className="profile-data__element-title">ID: </b>
                <span className="profile-data__info">{user.id}</span>
            </div>
            <div className="profile-data__element">
                <b className="profile-data__element-title">Полное Имя: </b>
                <span className="profile-data__info">{user.fullName}</span>
            </div>
            <div className="profile-data__element">
                <b className="profile-data__element-title">Ник: </b>
                <span className="profile-data__info">{user.nickname}</span>
            </div>
            <button className="profile-data__edit" onClick={() => setEditMode(true)}>Изменить</button>

        </div>
    );
};

export default ProfileData;
