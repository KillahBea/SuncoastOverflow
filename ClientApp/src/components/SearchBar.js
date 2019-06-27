import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SearchBar() {
  const [questions, setQuestions] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('api/question').then(resp => {
      setQuestions(resp.data)
    })
  }, [])

  const getSearchResults = e => {
    e.preventDefault()
    axios.get('api/search?searchTerm=' + searchTerm).then(resp => {
      setQuestions(resp.data)
    })
  }

  return (
    <div>
      <form onSubmit={getSearchResults} class="form-inline">
        <i class="fas fa-search" aria-hidden="true" />
        <input
          class="form-control form-control-sm ml-3 w-75"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button>Search</button>
      </form>

      {/* <!-- Search form -->
<form class="form-inline active-cyan-3 active-cyan-4">
  <i class="fas fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
    aria-label="Search"/>
</form>

<!-- Search form -->
<form class="form-inline ">
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search"/>
  <i class="fas fa-search" aria-hidden="true"></i>
</form>


<form class="form-inline active-cyan-4">
  <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
    aria-label="Search"/>
  <i class="fas fa-search" aria-hidden="true"></i>
</form> */}
    </div>
  )
}
