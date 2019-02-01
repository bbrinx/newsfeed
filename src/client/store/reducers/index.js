import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer'
import { statusReducer } from './statusReducer'

export const rootReducer = combineReducers({
  articles: articlesReducer
})