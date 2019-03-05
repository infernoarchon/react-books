import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };
  componentDidMount() {
    this.loadBooks();
  }

  // Add code here to get all books from the database and save them to this.state.books
  loadBooks = () => {
      API.getBooks()
        .then(res => this.setState({ books: res.data}))
        .catch(err => console.log(err))
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      <Jumbotron>
        <Row>
          
            <Col size="md-6">

            
            <h3>Favorite Books</h3>
           

            </Col>
            
         </Row>
         </Jumbotron>
         <Col size="md-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={book.link} target="_blank">
                        <img className="float-left pr-3 img-fluid" src={book.image} />
                        <h5 style={{display: "inline"}}><strong>{book.title}</strong></h5>
                        </a>
                        <h6> by {book.authors}</h6>
                        
                        <p className="d-none d-lg-block d-md-block">{book.description}</p>
                        {/* <AddBtn onClick={() => this.handleBookSave(book)} /> */}
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <div></div>
            )}
          </Col>
      </Container>
    );
  }
}

export default Saved;
