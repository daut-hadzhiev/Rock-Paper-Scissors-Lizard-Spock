// import {
//     ADD_TODO,
//     TOGGLE_TODO,
//     SET_VISIBILITY_FILTER
// } from '../actions/actions';

import { ActionTypes } from '../actions/actions'

const initialState = {
    value: "",
    computerResult: "",
    playerResult: "",
    result: '',
    computerWins: 0,
    playerWins: 0,
    drawGames: 0
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ActionTypes.SET_VALUE):
            console.log(action.type)
            console.log(action.payload)

            return {...state, playerResult: action.payload};
        
        case (ActionTypes.SET_CHOICE):
            console.log(action.type)
            console.log(action.payload)

            return {...state, playerResult: action.payload};
        default:
            return state;
    }
}

// const visibilityFilter = (state = {}, action) => {
//     switch (action.type) {
//         case SET_VISIBILITY_FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [
//                 ...state,
//                 {
//                     text: action.text,
//                     completed: false
//                 }
//             ];
//         case TOGGLE_TODO:
//             return state.map((todo, index) => {
//                 if (index === action.index) {
//                     return Object.assign({}, todo, {
//                         completed: !todo.completed
//                     });
//                 }
//                 return todo;
//         });
//         default:
//             return state;
//     }
// };

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// });

// export default todoApp;

export default mainReducer;