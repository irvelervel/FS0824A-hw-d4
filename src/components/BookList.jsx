import { Col, Container, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

const BookList = function (props) {
  // BookList riceve dalle props un array di libri
  // lo mappa, e per ogni oggetto ritorna un SingleBook
  // l'array dei libri si trova in props.books
  return (
    <Container>
      <Row>
        {props.books.map((bookObject, i) => {
          // bookObject è il singolo oggetto libro dentro Horror
          // la prima volta, il primo
          // la seconda volta, il secondo
          // etc.
          return (
            <Col xs={12} md={4} lg={3} key={i}>
              <SingleBook book={bookObject} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default BookList
