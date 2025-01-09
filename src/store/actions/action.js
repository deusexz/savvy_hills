export const TOGGLE_MENU = 'TOGGLE_MENU'
export const TOGGLE_CONTACT = 'TOGGLE_CONTACT'

export function toggleMenu(isMenuToggled) {
    return {
        type: TOGGLE_MENU,
        payload: {isMenuToggled}
    }
}

export function toggleContactPopUp(isPopUpToggled) {
    return {
        type: TOGGLE_CONTACT,
        payload: {isPopUpToggled}
    }
}