import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="ui padded stacked segment container">
  <h2 className="header">React Redux "Todo List" example</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
