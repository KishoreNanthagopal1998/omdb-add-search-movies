import React from 'react'
import {Link} from 'react-router-dom';
import { InputGroup, Input, Button } from 'reactstrap'
import "../styles.css"

export default function SearchSection (props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props

  return (
    <section className='search-section'>
      <h1 className="titleMovieSearch">Enter the movie to search</h1>
      <br />
      <InputGroup>
        <Input
          placeholder=' Search movie name...'
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
      </InputGroup>
      <br />
      <center>
      <Button color='success' onClick={onClickSearch}>
          Search
        </Button> &nbsp;
        <Link to={`/add-movie`} className='btn btn-primary'>
          Add Movie
        </Link>
        </center>
    </section>
  )
}
