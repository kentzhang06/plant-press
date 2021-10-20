import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";

const receivedFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows,
});

export const fetchFollows = () => (dispatch) =>
  FollowAPIUtil.fetchFollows().then((result) =>
    dispatch(receivedFollows(result.data))
  );

const receivedFollow = (plantId) => ({
  type: RECEIVE_FOLLOW,
  plantId,
});

export const followPlant = (plantId) => (dispatch) =>
  FollowAPIUtil.followPlant(plantId).then(() =>
    dispatch(receivedFollow(plantId))
  );

const receivedUnfollow = (plantId) => ({
  type: RECEIVE_UNFOLLOW,
  plantId,
});

export const unfollowPlant = (plantId) => (dispatch) =>
  FollowAPIUtil.unfollowPlant(plantId).then(() =>
    dispatch(receivedUnfollow(plantId))
  );
