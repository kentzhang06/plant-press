import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import PlantFormContainer from './plants/plant_form_container'

import CreatePostFormContainer from './post/create_post_form_container';
import EditPostFormContainer from './post/edit_post_form_container';

const App = () => (
    <div>

        <Switch>
            <Route exact path="/post" component={CreatePostFormContainer} />
            {/* <Route exact path="/post/:postId" component={EditPostFormContainer} /> */}
            <ProtectedRoute exact path="/pp" component={HomePageContainer} />
            <ProtectedRoute exact path="/addplant" component={PlantFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomePageContainer} />

        </Switch>
    </div>
);

export default App;
