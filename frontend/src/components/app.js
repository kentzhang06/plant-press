import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home_page/home_page_container';

import PhotoForm from './photo/photo_form';

const App = () => (
    <div>

        <Switch>
            <Route exact path="/photo" component={PhotoForm} />
            <ProtectedRoute exact path="/pp" component={HomePageContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={HomePageContainer} />

        </Switch>
    </div>
);

export default App;
