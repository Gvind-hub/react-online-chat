import {usersListAPI} from "../api/api";

const GET_USERS_LIST = 'GET_USERS_LIST';

let initialState = {
    users: ''
};

const usersListReducer = (state = initialState, action) => {
    if (action.type === GET_USERS_LIST) {
        return {
            ...state,
            users: action.users,
        };
    } else {
        return state;
    }
};

export const getUsersList = users => ({type: GET_USERS_LIST, users});

export const onGetUsersList= () => async (dispatch) => {
    try {
        const response = await usersListAPI.getUsersListFirebase();
        const userData = response.docs.map(doc => ({id: doc.id, ...doc.data()}));
        dispatch(getUsersList(userData))
    } catch (error) {
        console.log("Error on getting a user list: ", error);
    }
};


export default usersListReducer;