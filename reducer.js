import { combineReducers } from 'redux';
import * as settings from './appConfig';

let app_reducers = {};

settings.INSTALLED_APPS.forEach((app) => {
    app_reducers[app.BaseReducer.name] = app.Reducer;
});


const BaseReducer = combineReducers(app_reducers);

export default BaseReducer