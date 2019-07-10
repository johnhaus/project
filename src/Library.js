import React from 'react';
import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends React.Component {

  // Defaults to these values in the event no books are provided
  static defaultProps = {
    books: [
      {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
    ]
  }
  // Allows removal of constructor
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
   }

  componentDidMount() {
    this.setState({loading: true})
    // fetch data from rest api
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("The component has updated")
  }

  toggleOpenClosed = () => {
    // Using a callback function here
    this.setState(prevState => ({
      // returns the opposite of whatever current state of 'open' is.
      open: !prevState.open
    }))
  }

  render() {
    console.log(this.state)
    // before destructuring
      // const books = this.props.books
    // after destructuring
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "loading..."
          : <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library product of the week</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100}/>
                </div>
              )
            })}
          </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          //  add a key to each book
          (book, i) =>
            <Book
              key={i}
              title={book.title}
              author={book.author}
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}/>
          )}
      </div>
    )
  }
}

export default Library
