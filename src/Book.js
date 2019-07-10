import React from 'react';

// Provides a default if some information is missing from a book
// Allows UI to render as expected if data is missing
export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes' : 'no'}</p>
    </section>
  )
}
