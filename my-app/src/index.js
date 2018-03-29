import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
    <MuiThemeProvider>
    <App />
    </MuiThemeProvider>
    ,document.getElementById('root'));

