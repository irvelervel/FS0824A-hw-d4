import { Component } from 'react'
import { Card } from 'react-bootstrap'

// supponiamo di ricevere una prop che si chiami "book"

// props -> { book: {} }

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      //   <Card className={this.state.selected ? 'selected' : ''}>
      <Card style={{ border: this.state.selected ? '3px solid red' : '' }}>
        <Card.Img
          onClick={() => {
            this.setState({
              selected: !this.state.selected, // all'opposto del valore attuale
            })
          }}
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>{this.props.book.price}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
