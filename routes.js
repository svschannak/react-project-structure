import React, {Component} from 'react';
import { Router, browserHistory, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as settings from './appConfig';

export default class BaseRoutes extends Component{

    constructor(){
        super();

        injectTapEventPlugin();
    }

    render(){
        return(
            <Router history={browserHistory}>
                {settings.INSTALLED_APPS.map((app, idx) => {
                    return (
                        <Route key={idx}>
                            {app.Routes}
                        </Route>
                    )
                })}

            </Router>
        )
    }
}
