const defaultState = {
    display_dark_background: "",
}

const TURN_ON = "TURN_ON";
const TURN_OFF = "TURN_OFF";


export const backgroundStyleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TURN_ON":
            return {display_dark_background: "block"};
        case "TURN_OFF":
            return {display_dark_background: ""};
        default:
            return state;
    }
}

export const turnOnDarkBackground = () => ({type: TURN_ON});
export const turnOffDarkBackground = () => ({type: TURN_OFF});
