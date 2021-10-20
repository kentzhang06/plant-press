import { connect } from "react-redux";
import { fetchFollowingPosts } from "../../actions/post_actions";
import {
  followPlant,
  fetchFollows,
  unfollowPlant,
} from "../../actions/follow_actions";
import FollowsFeed from "./follows_feed";

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    follows: Object.keys(state.entities.follows),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollowingPosts: () => dispatch(fetchFollowingPosts()),
    followPlant: (plantId) => dispatch(followPlant(plantId)),
    unfollowPlant: (plantId) => dispatch(unfollowPlant(plantId)),
    fetchFollows: () => dispatch(fetchFollows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowsFeed);
