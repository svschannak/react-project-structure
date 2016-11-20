import React from 'react';
import ReactDOM from 'react-dom';
import BaseRoutes from './routes.js'
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BaseRoutes />
    </Provider>,
    document.getElementById('root')
);
