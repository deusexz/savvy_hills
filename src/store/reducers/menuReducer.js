    import {TOGGLE_MENU} from "../actions/action";

    const initialState = {
        isMenuToggled: false,
    }

    export default function menuReducer(state = initialState, action) {
        switch (action.type) {
            case TOGGLE_MENU: {
                return {
                    ...state,
                    isMenuToggled: !state.isMenuToggled,
                }
            }

            default: return state;
        }
    }