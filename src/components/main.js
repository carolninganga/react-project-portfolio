import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Contact from "../pages/Contact/contact";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/resume";
import Home from '../pages/Home/Home';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
)

export default Main;