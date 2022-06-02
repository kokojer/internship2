import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
// components
import { App } from './App'
import { HashRouter } from 'react-router-dom'
// styles
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'

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
