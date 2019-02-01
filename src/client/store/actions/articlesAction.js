export const articlesActionTypes = {
  FETCH_ARTICLES: '@@articles/FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS: '@@articles/FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_FAILURE: '@@articles/FETCH_ARTICLES_FAILURE',
  // LOAD_GERMANY = '@@articles/LOAD_GERMANY',
  // LOAD_SPORTS = '@@articles/LOAD_SPORTS',
  // LOAD_ARCHITECTURE = '@@articles/LOAD_ARCHITECTURE',
}

const fetchArticlesAction = () => {
  return {type: articlesActionTypes.FETCH_ARTICLES};
}
const fetchArticlesSuccessAction = (payload) => {
  return {type: articlesActionTypes.FETCH_ARTICLES_SUCCESS, payload};
}
const fetchArticlesFailureAction = () => {
  return {type: articlesActionTypes.FETCH_ARTICLES_FAILURE};
}

export const fetchArticles = (category) => {
  return async(dispatch) => {
    try {
      dispatch(fetchArticlesAction())
      const response = await fetch(`/api/${category}/`);
      if (!response.ok) throw Error(response.statusText);
      const body = await response.json();
      dispatch(fetchArticlesSuccessAction(body))
    } catch(err) {
      console.log('THE ERROR IS: ', error)
      dispatch(fetchArticlesFailureAction())
    }
  }
}