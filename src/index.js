import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers/combine.js'
import {Provider} from 'react-redux';
const store=createStore(allReducers);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
