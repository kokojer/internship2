import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// components
import { App } from './App';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <StrictMode>
            <App />
    </StrictMode>, document.getElementById('root')
)
