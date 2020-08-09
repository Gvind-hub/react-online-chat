import {userAPI} from "../api/api";

const GET_USER_PROPS = 'GET_USER_PROPS';

let initialState = {
    email: '',
    fullName: '',
    id: '',
    nickname: '',
    photoURL: ''
};

const userReducer = (state = initialState, action) => {
     if (action.type === GET_USER_PROPS) {
         return {
             ...state,
             email: action.email,
             fullName: action.fullName,
             id: action.id,
             nickname: action.nickname,
             photoURL: action.photoURL,
             doc: action.doc
         }
     } else {
            return state;
    }
};


export const getUserProps = (email, fullName, id, nickname, photoURL, doc) => ({type: GET_USER_PROPS, email, fullName, id, nickname, photoURL, doc});


export const getUser = (email) => async (dispatch) => {
    try {
        const response = await userAPI.getUser(email);
        const userData = response.docs.map(doc => ({id: doc.id, ...doc.data()}))[0];
        dispatch(getUserProps(email, userData.fullName, userData.id, userData.nickname, userData.photoURL, response.docs[0].id))
    } catch (error) {
        console.log("Error on getting user: ", error);
    }
};

export const updateUserProps = (email, fullName, id, nickname, photoURL, doc) => async (dispatch) => {
    try {
        await userAPI.updateUser(email, fullName, id, nickname, photoURL, doc);
        dispatch(getUserProps(email, fullName, id, nickname, photoURL, doc))
    } catch (error) {
        console.log("Error on updating user: ", error);
    }
};



export default userReducer;