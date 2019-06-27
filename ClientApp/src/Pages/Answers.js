import React, { Component } from 'react'

class Answers extends Component {
  render() {
    return (
      <main>
        <div className="questionBox">
          <h1>Q:</h1>
        </div>
        <div>
          <h1>A:</h1>
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
          <h3>Would you like to add an answer?</h3>
          <form>
            <textarea rows="5" cols="50" name="answer" />
          </form>
        </div>
      </main>
    )
  }
}

export default Answers
