import { combineReducers } from 'redux';
import { detailsReducer } from './detailsReducer';
import { resultsReducer } from './resultsReducer';
import { trendingReducer } from './trendingReducer';

export const rootReducer = combineReducers({
	details: detailsReducer,
	results: resultsReducer,
	trending: trendingReducer
});
