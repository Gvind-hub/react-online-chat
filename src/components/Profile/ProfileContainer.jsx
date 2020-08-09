import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router";

import Profile from "./Profile";
import {updateUserProps} from "../../redux/user-reducer";

const ProfileContainer = ({isAuth, user, updateUserProps}) => {
    let history = useHistory();
    useEffect(() => {
        !isAuth && history.push('/')
    }, [isAuth, history]);

    return <Profile user={user} updateUserProps={updateUserProps}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    user: state.user
});


export default connect(mapStateToProps, {updateUserProps})(ProfileContainer);