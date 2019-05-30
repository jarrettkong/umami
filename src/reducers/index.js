import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurantsReducer';
import { resultsReducer } from './resultsReducer';

export const rootReducer = combineReducers({
	restaurants: restaurantsReducer,
	results: resultsReducer
});
