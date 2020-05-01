import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger, promise} from '../middleware/index';
import categories from '../_reducers/categories';
import auth from '../_reducers/auth';

const rootReducers = combineReducers({
  categories,
  auth,
});

const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
