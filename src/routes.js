import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import Experiments from './containers/Experiments/Experiments';
import NotFoundPage from './components/NotFoundPage';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} ignoreScrollBehavior />
            <Route path="Home" component={Home} ignoreScrollBehavior/>
            <Route path="experiments" component={Experiments} ignoreScrollBehavior/>
            <Route path="*" component={NotFoundPage} ignoreScrollBehavior/>
        </Route>
    </Router>
);
