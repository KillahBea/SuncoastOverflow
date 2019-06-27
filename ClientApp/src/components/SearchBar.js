import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form class="form-inline">
          <i class="fas fa-search" aria-hidden="true" />
          <input
            class="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
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
}

export default SearchBar
