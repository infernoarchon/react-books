import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import AddBtn from "../components/AddBtn";

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
    // this.loadBooks();
    document.getElementById("book-search").focus()
  }

  // Add code here to get all books from the database and save them to this.state.books
  // loadBooks = () => {
  //     API.getBooks()
  //       .then(res => this.setState({ books: res.data}))
  //       .catch(err => console.log(err))
  // }


  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;


    // Set the state for the appropriate input field
    this.setState({
      [name]: value //NOTE: using a variable as a property name would set a new property
    });
  };

  handleBookSave = book => {
    console.log(book)
      API.saveBook({
        title : book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description ? book.volumeInfo.description.slice(0,300) + "..." : "No description available",
        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://placeholder.pics/svg/128x205/DEDEDE/555555/%3F",
        link: book.volumeInfo.infoLink
      }).then(
        console.log("book saved")
      )
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.title) {
      API.searchBooks(this.state.title)
      .then(response => {
        console.log(response.data.items)
        this.setState({ books: response.data.items})
        
      })

    }
  }


  render() {
    return (
      <Container fluid>
      <Jumbotron>
        <Row>
          
            <Col size="md-6">

            <form className="input-group" onSubmit={this.handleFormSubmit}>
            <Input name="title" placeholder="Type something..." onChange={e => this.handleInputChange(e)} />
            <FormBtn disabled={!this.state.title ? true : false}>Search Books</FormBtn>
            </form>
           

            </Col>
            
         </Row>
         </Jumbotron>
          <Col size="md-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id + book.etag}>
                    <a href={book.volumeInfo.infoLink} target="_blank">
                        <img className="float-left pr-3 img-fluid" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://placeholder.pics/svg/128x205/DEDEDE/555555/%3F"} />
                        <h5 style={{display: "inline"}}><strong>{book.volumeInfo.title}</strong></h5>
                        </a>
                        <h6> by {book.volumeInfo.authors ? book.volumeInfo.authors : "Unknown Author"}</h6>
                        
                        <p className="d-none d-lg-block d-md-block">{book.volumeInfo.description ? book.volumeInfo.description.slice(0,300) + "..." : "No description available."}</p>
                        <AddBtn onClick={() => this.handleBookSave(book)} />
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
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

export default Books;
