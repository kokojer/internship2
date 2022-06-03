import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
// components
import { App } from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// styles
import './index.scss'

ReactDOM.render(
    <StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </StrictMode>,
    document.getElementById('root'),
)
