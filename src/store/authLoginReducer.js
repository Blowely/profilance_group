import {CREDENTIALS_USERS} from "../constants/authConstants";

const defaultState = {
    login: ""
}

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const authLoginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {login: action.login};
        case "LOGOUT":
            return {login: ""};
        default:
            return state;
    }
}

export const authenticationUser = (payload) => {
    return CREDENTIALS_USERS.hasOwnProperty(payload.login)
        && CREDENTIALS_USERS[payload.login].password === payload.password;
};
export const loginAction = (login) => ({type: LOGIN, login: login});
export const logoutAction = () => ({type: LOGOUT});
