import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
import PlantFormContainer from './plants/plant_form_container';
import { Welcome } from './home_page/welcome';

const App = () => (
    <div>
        <Switch>
            <ProtectedRoute exact path="/dashboard" component={HomePageContainer} />
            <ProtectedRoute exact path="/addplant" component={PlantFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={Welcome} />
        </Switch>
    </div>
);

export default App;
