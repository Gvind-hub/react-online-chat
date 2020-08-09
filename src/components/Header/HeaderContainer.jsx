import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {logOut} from "../../redux/auth-reducer";

const HeaderContainer = ({isAuth, logOut, nickname, photoURL}) => {

    return <Header isAuth={isAuth} logOut={logOut} nickname={nickname} photoURL={photoURL} />
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    nickname: state.user.nickname,
    photoURL: state.user.photoURL
});


export default connect(mapStateToProps, {logOut})(HeaderContainer);