import React, { Component } from 'react'

class Answers extends Component {
  render() {
    return (
      <main>
        <div className="questionBox">
          <h1>Q:</h1>
          <p>This is where a question will be displayed.</p>
        </div>
        <div>
          <h1>Q:</h1>
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
      </main>
    )
  }
}

export default Answers
