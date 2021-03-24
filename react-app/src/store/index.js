import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, logger, applyMiddleware } from 'redux';
import SessionReducer from './session';
import ChefReservationReducer from './chef_reservations';
import ChefsReducer from './chefs';


const rootReducer = combineReducers({
    session: SessionReducer,
    chef_reservations: ChefReservationReducer,
    chefs: ChefsReducer,
    
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;