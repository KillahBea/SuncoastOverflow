import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
class Home extends Component {
  render() {
    return (
      <main>
        <div>
          <SearchBar />
        </div>
        <div>
          <h3>Questions</h3>
          <ul className="question-list">
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
