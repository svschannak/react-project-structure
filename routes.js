import React, {Component} from 'react';
import { Router, browserHistory, Route } from 'react-router';
import * as settings from './appConfig';

export default class BaseRoutes extends Component{

    render(){
        return(
            <Router history={browserHistory}>
                {settings.INSTALLED_APPS.map((app, idx) => {
                    return (
                        <Route key={idx}>
                            {app.ModuleRoutes}
                        </Route>
                    )
                })}

            </Router>
        )
    }
}
