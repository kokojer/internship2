import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// components
import { App } from './App';
import { HashRouter } from 'react-router-dom'
// styles
import './index.scss'


ReactDOM.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>, document.getElementById('root')
)
