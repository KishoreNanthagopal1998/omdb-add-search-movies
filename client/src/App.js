import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap'
import SearchSection from './components/SearchSection'

export default function App() {
  const [data, setData] = useState({})
  const [searchValue, setSearchValue] = useState('')

  function onChangeSearchValue(event) {
    const searchValue = event.target.value
    setSearchValue(searchValue)
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      seacrhTextValidate()
    }
  }

  function onClickSearch() {
    seacrhTextValidate()
  }

  function seacrhTextValidate()
  {
    if(searchValue.length==0)
    {
      alert(`Please enter the title`)
    }
    else{
      fetchMovies()
    }
  }

  function fetchMovies() {
    fetch(`http://localhost:5000/getMovies/${searchValue}`)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error))
  }

  return (
    <Container style={{ marginTop: '60px' }}>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className='movies-section'>
        <Row>
          {data &&
            data.length &&
            data.map(movie => {
              return (
                <Col md={4} key={movie.imdbID}>
                  <Card>
                    <CardImg
                      top
                      width='100%'
                      src={movie.poster}
                      alt='Card image cap'
                    />
                    <CardBody>
                      <CardTitle>{movie.title}</CardTitle>
                      <CardText>
                        {movie.year}-{movie.type}
                      </CardText>
                      <Link
                        to={`/booking-page/${movie.imdbID}`}
                        className='btn btn-primary'
                      >
                        Book Now
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </section>
    </Container>
  )
}
