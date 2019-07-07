import React from 'react';
import { render } from 'react-dom';

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
const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" author="Ernest Hemmingway" pages={260} />
      <Book title="White Teeth" author="Zadie Smith" pages={480} />
      <Book title="Cat's Cradle" author="Kurt Vonnegut" pages={304} />
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root')
)
