import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from '@/store'
import '@/assets/less/index.less'
import 'antd-mobile/es/global'
import './flexiable'
import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
