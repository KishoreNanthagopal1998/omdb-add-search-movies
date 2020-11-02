import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container
} from "reactstrap";
import "../styles.css";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
    console.log(data)
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`http://localhost:5000/getMovieById/${movieId}`)
      .then((response) => response.json())
      .then((result) => {
        const [movieDetail]=result;
        setLoading(false);
        setData(movieDetail);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert(`Tickets for "${data.title}" is Booked`);
  }

  return (
    <Container>
      {loading ? (
        <center><h3 className="loadingTag">Loading...</h3></center>
      ) : (
        <>
          <section className="movie-details-section">
            <br />
            <h1 className = "headingBooking">Welcome to booking Section</h1>
            <br />
            <h4 className="movieTitle">Movie - {data.title}</h4>
            <br />
            <Card className="align-items-center">
              <CardImg
                top
                style={{ height: "480px", width: "360px" }}
                src={data.poster}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h3>{data.title}</h3>
                </CardTitle>
                <CardText>
                  <p>
                    <strong>Year:</strong>
                    {data.year}
                  </p>
                  <p>
                    <strong>Type: </strong>
                    {data.type}
                  </p>
                
                  
                </CardText>
                <Button color="primary" onClick={onClickBook}>
                  Watch Movie
                </Button>
                &nbsp;
                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.goBack()}
                >
                  Go Back
                </Button>
              </CardBody>
            </Card>
          </section>
        </>
      )}
    </Container>
  );
}
