import React, {useState} from 'react';

import ProfileData from "./ProfileData/ProfileData";
import EditForm from "./EditForm/EditForm";

import './Profile.scss'
import placeholder from "../../assets/img/userPlaceholder.svg";


const Profile = ({user, updateUserProps}) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="profile">
            <div className="profile__inner">
                <h2 className="profile__title">Профиль</h2>
                <div className="profile__details">
                    <div className="profile__avatar">
                        <img className="user-avatar profile__pic" src={user.photoURL ? user.photoURL : placeholder} alt="user pic"/>
                    </div>
                    <div className="profile__info">
                        {!editMode
                            ? <ProfileData setEditMode={setEditMode} user={user}/>
                        : <EditForm setEditMode={setEditMode} user={user} updateUserProps={updateUserProps}/> }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
