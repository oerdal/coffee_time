import { combineReducers } from 'redux';
import DrinkReducer from './drink_reducer';

const rootReducer = combineReducers({
    drinks: DrinkReducer
});

export default rootReducer;