import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';

export default function configureStore(initialState=undefined) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
