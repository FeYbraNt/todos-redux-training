import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

// Normalize css
import 'normalize.css';
// Semantic UI css
import 'semantic-ui-css/semantic.min.css'

import configureStore from './store'

// Store
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
