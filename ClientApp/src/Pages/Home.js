import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Questions from './Questions'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home(props) {
  const questionId = props.match.params.id

  const [question, setQuestion] = useState([])

  useEffect(() => {
    axios.get('api/question').then(resp => {
      console.log(resp.data)
      setQuestion(resp.data)
    })
  }, [])

  return (
    <main>
      <div>
        <Link to="/SearchBar"> Search for a question </Link>
      </div>
      <h3>Questions</h3>
      <ul className="question-list">
        {question.map(question => {
          return (
            <>
              <Link to="/questions/questionId">
                <li>{question.description}</li>
              </Link>
            </>
          )
        })}
      </ul>
    </main>
  )
}
