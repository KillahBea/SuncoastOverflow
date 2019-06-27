import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Answers() {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    axios.get('api/answer').then(resp => {
      setAnswers(resp.data)
    })
  }, [])

  const sendNewAnswer = x => {
    axios.put('api/question/id/answer').then(resp => {
      setAnswers(answers.concat(resp.data))
    })
  }

  return (
    <main>
      <div className="question-box">
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
      <div class="container">
        <h2>Your Answer:</h2>
        <p>Please provide your answer and explanation to the above question.</p>
        <form
        // onSubmit={sendNewAnswer(questionId)}
        >
          <div class="form-group">
            <textarea class="form-control" rows="5" id="answer" />
          </div>
        </form>
      </div>
    </main>
  )
}
