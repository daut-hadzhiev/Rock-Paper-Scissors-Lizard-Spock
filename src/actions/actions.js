/*
 * Action types
 */

export const ActionTypes = {
    SET_CHOICE: 'SET_CHOICE',
    SET_VALUE: 'SET_VALUE'
};


/*
 * action creators
 */

export function setValue(value) {
    return {
        type: ActionTypes.SET_VALUE,
        payload: value
    };
}

export function setChoice(choice) {
    return { 
        type: ActionTypes.SET_CHOICE,
        payload: choice
    };
}

export function PickWeapon(weaponType) {
    return {
        type: 'PICK_WEAPON',
        payload: weaponType
    };
}