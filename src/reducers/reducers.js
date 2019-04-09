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
            return {...state, value: action.payload};
        
        case (ActionTypes.SET_CHOICE):
            return {...state, playerResult: action.payload};
        default:
            return state;
    }
}

export default mainReducer;