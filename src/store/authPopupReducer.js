const defaultState = {
    display_auth_popup: false,
}

const TURN_ON = "TURN_ON";
const TURN_OFF = "TURN_OFF";

export const authPopupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TURN_ON":
            return {display_auth_popup: true};
        case "TURN_OFF":
            return {display_auth_popup: false};
        default:
            return state;
    }
}

export const turnOnAuthPopup = () => ({type: TURN_ON});
export const turnOffAuthPopup = () => ({type: TURN_OFF});
