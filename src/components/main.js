import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage/landingPage';
import Contact from "../pages/Contact/contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/resume";
import About from "../pages/About/about";


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
)

export default Main;