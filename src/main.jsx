import React from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import Store from './redux/Store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import './App.css';

ReactDOM.createRoot(
    document.getElementById('root')
).render(

    <React.StrictMode>

        <Provider store={Store}>

            <App />

        </Provider>

    </React.StrictMode>

);