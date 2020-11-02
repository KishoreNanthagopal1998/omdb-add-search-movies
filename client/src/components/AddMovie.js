import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Input, Button, Container } from 'reactstrap'
import '../styles.css'

export default function AddMovie() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  const [imdbID, setId] = useState('')
  const [type, setType] = useState('')
  const [insertFlag, setInsertFlag] = useState(false)

  const history = useHistory();

  function onClickInsert() {
    console.log(imdbID)
    axios
      .post(`http://localhost:5000/addMovie`, {
        title,
        year,
        poster,
        imdbID,
        type
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
        setInsertFlag(true)
      })
    {
      insertFlag ? (alert(`${title} movie is added`)) : (alert(`movie is not added / please insert all the details`))
    }


  }

  return (
    <Container className="containerClass">
      <h1 className="addMovieTitle">Please enter the details to add a new movie</h1>
      <br />
      <section>
        <p>Enter the Movie Name</p>
        <p className="p-required">Required*</p>
        <Input
          placeholder='Iron man'
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <br />
        <p>Enter the Year</p>
        <p className="p-required">Required*</p>
        <Input
          placeholder='2018'
          onChange={e => {
            setYear(e.target.value)
          }}
        />
        <br />
        <p>Enter the imdbID</p>
        <p className="p-required">Required*</p>
        <Input
          placeholder='tt123456'
          onChange={e => {
            setId(e.target.value)
          }}
        />
        <br />
        <p>Enter the Type</p>
        <p className="p-required">Required*</p>
        <Input
          placeholder='Movie'
          onChange={e => {
            setType(e.target.value)
          }}
        />
        <br />
        <p>Enter the Poster Link</p>
        <p className="p-required">Required*</p>
        <Input
          placeholder='https://.........jpg'
          onChange={e => {
            setPoster(e.target.value)
          }}
        />
        <br />
        <center className="addMovieButton">
          <Button color='success' onClick={onClickInsert}>
            Insert Data
          </Button>
          &nbsp;&nbsp;
          <Button
            type='button'
            className='btn btn-danger'
            onClick={() => history.goBack()}>
            Go Back
          </Button>
        </center>
      </section>
    </Container>
  )
}
