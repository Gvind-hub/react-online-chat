import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Login from "./Login";
import {login} from "../../redux/auth-reducer";
import {useHistory} from "react-router";

const LoginContainer = ({login, error, isFetching, isAuth}) => {
    const history = useHistory();
    useEffect(() => {
        isAuth && history.push('/chat/work')
    }, [isAuth, history]);

    return <Login login={login} error={error} isFetching={isFetching}/>
};

const mapStateToProps = (state) => ({
    error: state.auth.error,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, {login})(LoginContainer);