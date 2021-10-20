import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import "./css/style.css";

// import {
//   fetchPlantPosts,
//   fetchAllPosts,
//   createPost,
//   updatePost,
//   deletePost,
// } from "./actions/post_actions";

// import {
//   fetchFollows,
//   followPlant,
//   unfollowPlant,
// } from "./actions/follow_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore();
  }

  //TEST START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchPlantPosts = fetchPlantPosts;
  // window.fetchAllPosts = fetchAllPosts;
  // window.createPost = createPost;
  // window.updatePost = updatePost;
  // window.deletePost = deletePost;
  // window.fetchFollows = fetchFollows;
  // window.followPlant = followPlant;
  // window.unfollowPlant = unfollowPlant;

  //TEST END

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
