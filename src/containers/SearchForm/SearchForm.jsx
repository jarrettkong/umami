import React, { Component } from 'react'

export class SearchForm extends Component {
  render() {
    return (
      <form>
        <input type="text"/>
        <input type="submit" value="Search Umami"/>
      </form>
    )
  }
}

export default SearchForm
