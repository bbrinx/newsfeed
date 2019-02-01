import { Reducer } from 'redux';
import { articlesActionTypes } from '../actions';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  SUCCESS: 'success',
  FAILURE: 'failure'
};

const initialState = {
  articles: [],
  status: Status.IDLE
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case articlesActionTypes.FETCH_ARTICLES: return { ...state, status: Status.PENDING };
    case `${articlesActionTypes.FETCH_ARTICLES}_SUCCESS`: return { ...state, articles: action.payload, status: Status.SUCCESS };
    case `${articlesActionTypes.FETCH_ARTICLES}_FAILURE`:  return { ...state, status: action.payload };
    default: return state;
  }
};

export { reducer as articlesReducer };