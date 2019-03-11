import homeView from '../views/homeView';
import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions'

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
  status: state.articles.status
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: (category) => dispatch(fetchArticles(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(homeView);