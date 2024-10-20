import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/slice/MovieSlice";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "react-bootstrap";

function Movies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const data = useSelector((store) => store.movies);

  return (
    <div className="bg-dark py-y">
      <Container>
        <Row>
          {data.movies &&
            data.movies.map((movie) => (
              <Col key={movie.id} sm={12} lg={4} xl={4} md={6}>
                <Card>
                  {/* Film posteri */}
                  <CardImg
                    top
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  {/* Film bilgileri */}
                  <CardBody>
                    <CardTitle tag="h5">{movie.title}</CardTitle>
                    <CardText>{movie.overview}</CardText>
                    <CardText>
                      <small className="text-muted">
                        Release Date: {movie.release_date}
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
