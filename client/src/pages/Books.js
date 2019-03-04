import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class Books extends Component {
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


  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;


    // Set the state for the appropriate input field
    this.setState({
      [name]: value //NOTE: using a variable as a property name would set a new property
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.title && this.state.author) {
      API.saveBook({
        title : this.state.title, 
        author: this.state.author, 
        synopsis: this.state.sypnosis
      }).then(res => this.loadBooks())

    }
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" onChange={this.handleInputChange} />
              <Input name="author" placeholder="Author (required)" onChange={this.handleInputChange}/>
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" onChange={this.handleInputChange} />
              <FormBtn disabled={!this.state.title ? true : false} onClick={this.handleFormSubmit}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
