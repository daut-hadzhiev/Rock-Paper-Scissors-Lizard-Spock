/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const ActionTypes = {
    SET_CHOICE: 'SET_CHOICE',
    SET_VALUE: 'SET_VALUE'
};

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
    return { type: ADD_TODO, text };
};

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index };
};

export function setVisibilityFilter(filter) {
    console.log(filter);
    return { type: SET_VISIBILITY_FILTER, filter };
};

export function setValue(value) {
    return { type: ActionTypes.SET_VALUE, payload: value };
};

export function setChoice(choice) {
    return { type: ActionTypes.SET_CHOICE, payload: choice };
};

export function PickWeapon(weaponType) {
    return {
        type: 'PICK_WEAPON',
        payload: weaponType
    }
}