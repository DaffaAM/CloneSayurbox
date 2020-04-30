import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger, promise} from '../middleware/index';
import categories from '../_reducers/categories';

const rootReducers = combineReducers({
  categories,
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
