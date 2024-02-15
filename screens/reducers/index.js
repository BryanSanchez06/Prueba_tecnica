import { combineReducers } from 'redux';
import movieReducer from '../reducers/moviesReducers'; 
import seriesReducer from './seriesReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  series: seriesReducer,
});

export default rootReducer;
