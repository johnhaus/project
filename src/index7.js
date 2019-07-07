import React from 'react';
import { render } from 'react-dom';

let bookList = [
  {"title": "The Sun Also Rises", "author": "Ernest Hemmingway", pages:260},
  {"title": "White Teeth", "author": "Zadie Smith", pages:480},
  {"title": "Cat's Cradle", "author": "Kurt Vonnegut", pages:304}
]

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

//
class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    // When using constructor method, need to bind 'this'
    // Allows for toggling to be triggered with a button
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }
  toggleOpenClosed() {
    this.setState({
      // returns the opposite of whatever current state of 'open' is.
      open: !this.state.open
    })
  }
  render() {
    console.log(this.state)
    // before destructuring
      // const books = this.props.books
    // after destructuring
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          //  add a key to each book
          (book, i) =>
            <Book
              key={i}
              title={book.title}
              author={book.author}
              pages={book.pages}/>
          )}
      </div>
    )
  }
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)
