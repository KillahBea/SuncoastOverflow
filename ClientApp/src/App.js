import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import Home from './Pages/Home'
import Answers from './Pages/Answers'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/Answers" component={Answers} />
      </Layout>
    )
  }
}
