import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authPopupReducer} from "./authPopupReducer";
import {notifyResultReducer} from "./notifyResultReducer";
import {authLoginReducer} from "./authLoginReducer";
import {newsReducer} from "./newsReducer";

const rootReducer = combineReducers({
    display_auth_popup: authPopupReducer,
    notify: notifyResultReducer,
    login: authLoginReducer,
    news: newsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))