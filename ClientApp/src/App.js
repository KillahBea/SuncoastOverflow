import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './Pages/Home'
import Answers from './Pages/Answers'
import OtherThing from './Pages/Thing'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/questions/:id/answers" component={Answers} />
        </Switch>
      </Layout>
    )
  }
}
