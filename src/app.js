import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Routing } from './routing'

export const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
)
