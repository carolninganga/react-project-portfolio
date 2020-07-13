import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from "../pages/Blog/Blog";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/resume";
import Home from '../pages/Home/Home';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
)

export default Main;