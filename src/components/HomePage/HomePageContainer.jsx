import React from 'react';
import {connect} from "react-redux";

import HomePage from "./HomePage";

const HomePageContainer = ({isAuth}) => {

    return <HomePage isAuth={isAuth}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps)(HomePageContainer);