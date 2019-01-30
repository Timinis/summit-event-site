import { createStore, combineReducers, applyMiddleware } from 'redux';

import reporter from './middleware/reporter.js';
import imageReducer from './reducer/image-reducer.js';
import schedulesReducer from './reducer/schedule-reducer.js';
import sponsorsReducer from './reducer/sponsors-reducer.js';

let reducers = combineReducers({
  images: imageReducer,
  schedules: schedulesReducer,
  sponsors: sponsorsReducer
});

export default () => createStore(reducers, applyMiddleware(reporter));
