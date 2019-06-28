import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Answers(props) {
  const questionId = props.match.params.id
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState('')

  useEffect(() => {
    axios.get('api/question/2').then(resp => {
      console.log(resp.data)
      setQuestion(resp.data)
    })
    axios.get('api/answer').then(resp => {
      console.log(resp.data)
      setAnswers(resp.data)
    })
  }, [])

  const sendNewAnswer = e => {
    e.preventDefault()
    axios.put('api/question/id/answer').then(resp => {
      setAnswers(answers.concat(resp.data))
    })
  }

  return (
    <main>
      <div className="question-box">
        <h1>Q:</h1>
        <h3>{question.description}</h3>
      </div>
      <section>
        <ul>
          <h1>A:</h1>
          {answers.map(answer => {
            return <li>{answer.description}</li>
          })}
        </ul>
      </section>
      <div class="container">
        <h2>Your Answer:</h2>
        <p>Please provide your answer and explanation to the above question.</p>
        <form onSubmit={sendNewAnswer}>
          <div class="form-group">
            {/* <input class="form-control" /> */}
            <textarea class="form-control" rows="5" id="answer" />
            <button>Submit</button>
          </div>
        </form>
      </div>
    </main>
  )
}
