import React, { Component } from 'react'
import axios from 'axios'

class Questions extends Component {
  render() {
    return (
      <main>
        <div>
          <h1>What is your question?:</h1>
        </div>
        <div class="container">
          <h2>Your :</h2>
          <p>Please provide your answer and explanation to the above question.</p>
          <form>
            <div class="form-group">
              <textarea class="form-control" rows="5" id="answer" />
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default Questions
