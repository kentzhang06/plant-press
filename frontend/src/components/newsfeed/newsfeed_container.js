import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions/post_actions';
import NewsFeed from './newsfeed';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);