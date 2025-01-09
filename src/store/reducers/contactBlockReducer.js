import {TOGGLE_CONTACT} from "../actions/action";

const initialState = {
    isPopUpToggled: false,
}

export default function contactBlockReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CONTACT: {
            return {
                ...state,
                isPopUpToggled: !state.isPopUpToggled,
            }
        }
        default: return state;
    }
}