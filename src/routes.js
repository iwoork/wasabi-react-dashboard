import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import NotFoundPage from './components/NotFoundPage';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} ignoreScrollBehavior />
            <Route path="Home" component={Home} ignoreScrollBehavior/>
            <Route path="*" component={NotFoundPage} ignoreScrollBehavior/>
        </Route>
    </Router>
);
