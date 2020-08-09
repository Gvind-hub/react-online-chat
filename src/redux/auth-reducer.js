import {authAPI} from "../api/api";

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
const FETCHING = 'FETCHING';
const ERROR = 'ERROR';
const SIGN_OUT = 'SIGN_OUT';

let initialState = {
    isAuth: false,
    isFetching: false,
    error: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuth: false,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };
        case FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};

export const authSuccess = () => ({type: AUTH_SUCCESS});
export const fetchingSuccess = () => ({type: FETCHING_SUCCESS});
export const fetching = () => ({type: FETCHING});
export const errorAuth = error => ({type: ERROR, error});
export const signOutSuccess = () => ({type: SIGN_OUT});

export const login = (email, password) => async (dispatch) => {
    dispatch(fetching());
    try {
        await authAPI.signIn(email, password);
        dispatch(fetchingSuccess());
        dispatch(authSuccess())
    } catch (error) {
        dispatch(errorAuth(error));
        console.log("Error on login: ", error);
    }
};

export const logOut = () => async (dispatch) => {
    dispatch(fetching());
    try {
        await authAPI.signOut();
        dispatch(fetchingSuccess());
        dispatch(signOutSuccess())
    } catch (error) {
        console.log("Error on logout: ", error);
    }
};



export default authReducer;