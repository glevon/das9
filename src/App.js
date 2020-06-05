import React, { Component } from 'react'
import Table from './components/Table'
import {Provider} from 'react-redux'
import {createStore} from "redux"
import {userReducer} from './store/user/reducer'


let store = createStore(userReducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>   
      <Table></Table>
      </Provider>
    )
  }
}

export default App
