import { combineReducers } from 'redux';
import * as settings from './appConfig';

let app_reducers = {};

settings.INSTALLED_APPS.forEach((app) => {
    app.ModuleReducer.forEach((reducer) => {
        app_reducers[reducer.name] = reducer;
    });
});


const BaseReducer = combineReducers(app_reducers);

export default BaseReducer;