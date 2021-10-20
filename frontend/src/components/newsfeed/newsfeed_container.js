import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions/post_actions";
import {
  followPlant,
  fetchFollows,
  unfollowPlant,
} from "../../actions/follow_actions";
import NewsFeed from "./newsfeed";

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    follows: Object.keys(state.entities.follows),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword)),
    followPlant: (plantId) => dispatch(followPlant(plantId)),
    unfollowPlant: (plantId) => dispatch(unfollowPlant(plantId)),
    fetchFollows: () => dispatch(fetchFollows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
