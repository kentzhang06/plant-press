import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import PlantFormContainer from './plants/plant_form_container';
import { Welcome } from './home_page/welcome';
import PlantCollectionContainer from './plants/plant_collection_container';
import PlantDetailsContainer from './plants/plant_details_container';
import FooterContainer from './home_page/footer_container';
import TeamPage from './team_page/team_page';

import CreatePostFormContainer from './post/create_post_form_container';
import EditPostFormContainer from './post/edit_post_form_container';
import EditPlantContainer from './plants/plant_edit_container'


import CreateReminderContainer from './plants/plant_reminders/create_reminder_container';
import EditReminderContainer from './plants/plant_reminders/edit_reminder_container';
import NewsFeedContainer from './newsfeed/newsfeed_container';
import FollowsFeedContainer from './plant_following_feed/follows_feed_container';


const App = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/plant/:plantId/reminder/:reminderId" component={EditReminderContainer} />

            <ProtectedRoute exact path="/dashboard" component={HomePageContainer} />


            <ProtectedRoute exact path="/addplant" component={PlantFormContainer} />

            <ProtectedRoute exact path="/plant/:plantId/edit" component={EditPlantContainer} />

            <ProtectedRoute exact path="/plant/:plantId/reminder" component={CreateReminderContainer} />

            <ProtectedRoute exact path="/plant/:plantId" component={PlantDetailsContainer}/>

            <ProtectedRoute exact path="/plant/:plantId/post" component={CreatePostFormContainer} />

            <ProtectedRoute exact path="/plant/:plantId/post/:postId" component={EditPostFormContainer} />

            <ProtectedRoute exact path="/user/:userId" component={PlantCollectionContainer}/>

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <AuthRoute exact path="/" component={Welcome} />
            <ProtectedRoute exact path="/feed" component={FollowsFeedContainer} />
            <ProtectedRoute exact path="/newsfeed" component={NewsFeedContainer} />
            <Route exact path="/info" component={TeamPage} />
            <AuthRoute path="/" component={Welcome} />
        </Switch>
        <FooterContainer />
    </div>
);

export default App;
