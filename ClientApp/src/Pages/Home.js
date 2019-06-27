import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import Questions from './Questions'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <main>
        <div>
          <SearchBar />
        </div>
        <Link path="/Questions">
          <p>Submit a Question</p>
        </Link>
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
