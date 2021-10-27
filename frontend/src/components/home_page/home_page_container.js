import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchMyReminders } from "../../actions/reminder_actions";
import { fetchPlants } from "../../actions/plant_actions";
import { fetchAllPosts } from "../../actions/post_actions";
import HomePage from "./home_page";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    reminders: Object.values(state.entities.reminders.myReminders),
    plants: state.entities.plants,
    currentUser: state.session.user,
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchMyReminders: () => dispatch(fetchMyReminders()),
    fetchMyPlants: (userId) => dispatch(fetchPlants(userId)),
    fetchAllPosts: (keyword) => dispatch(fetchAllPosts(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
