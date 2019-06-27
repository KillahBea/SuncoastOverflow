import React, { Component } from 'react'

class Answers extends Component {
  render() {
    return (
      <main>
        <div className="question-box">
          <h1>Q:</h1>
          <p>This is where a question will be displayed.</p>
        </div>
        <div>
          <div>
            <p>Answer will go here.</p>
          </div>
          <div>
            <p>Answer will go here.</p>
          </div>
          <div>
            <p>Answer will go here.</p>
          </div>
          <div>
            <p>Answer will go here.</p>
          </div>
        </div>
        <div>
          <p>Answer the question:</p>
        </div>
        <div class="container">
          <h2>Your Answer:</h2>
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

export default Answers
