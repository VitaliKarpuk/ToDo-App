import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import './index.css'
import './Font-awesome/css/font-awesome.min.css'
import { createStore } from 'redux'
import { rootReducer } from './state-managment//reducers/index'
import { Provider } from 'react-redux'

const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store = {store}>
        <App />        
    </Provider>       
,rootElement)
