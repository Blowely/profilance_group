const defaultState = {
    notify: ""
}

const PUT = "PUT";
const CLEAN = "CLEAN";

export const notifyResultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "PUT":
            return {notify: action.notify};
        case "CLEAN":
            return {notify: ""};
        default:
            return state;
    }
}

export const putNotifyAction = (notify) => ({type: PUT, notify: notify});
export const cleanNotifyAction = () => ({type: CLEAN});
