import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
class Home extends Component {
  render() {
    return (
      <main>
        <div>
          <h1>Home</h1>
          <SearchBar />
        </div>
        <div>
          <h3>Questions</h3>
          <ul className="question-list">
            <li>
              <p>This is a question</p>
              <small>More </small>
            </li>
            <li>
              <p>This is a question</p>
            </li>
            <li>
              <p>This is a question</p>
            </li>
            <li>
              <p>This is a question</p>
            </li>
            <li>
              <p>This is a question</p>
            </li>
            <li>
              <p>This is a question</p>
            </li>
          </ul>
        </div>
      </main>
    )
  }
}

export default Home
