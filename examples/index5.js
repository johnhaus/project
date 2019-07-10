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

// Parent component (library) that displays child component (book)
// Library is function component
const Library = ({books}) => {
  return (
    <div>
      {books.map(
        //  add a key to each book
        (book, i) =>
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        )}
    </div>
  )
}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)
