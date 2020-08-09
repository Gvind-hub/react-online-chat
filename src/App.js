import React, {Component} from 'react';
import {Route} from "react-router";
import {connect} from "react-redux";
import firebase from "firebase";

import Footer from "./components/Footer/Footer";
import ChatContainer from "./components/Chat/ChatContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import HomePageContainer from "./components/HomePage/HomePageContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {authSuccess, signOutSuccess} from "./redux/auth-reducer";
import {getUser, getUserProps} from "./redux/user-reducer";
import {onGetUsersList} from "./redux/usersList-reducer";

class App extends Component {

    //Обзервер авторизации
    getAuthStatus = () => {
        firebase.auth().onAuthStateChanged((resp) => {
            this.updateUserState(resp);
        });
    };

    updateUserState = resp => {
        if (resp) {
            this.props.authSuccess();
            this.props.getUser(resp.providerData[0].email);
            this.props.onGetUsersList()
        } else {
            this.props.signOutSuccess();
            this.props.getUserProps('', '', '', '', '', '');
        }
    };

    componentDidMount() {
        this.getAuthStatus()
    }


    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <div className="container">
                    <Route exact path='/' render={() => <HomePageContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/chat' render={() => <ChatContainer/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {authSuccess, signOutSuccess, getUser, getUserProps, onGetUsersList})(App);
