import React from 'react';
import { render } from 'react-dom';

class FavoriteColorForm extends React.Component {
  // Set up initial state
  state = { value: '' }

  newColor = e =>
    this.setState({ value: e.target.value })

  // Log value to console once 'Submit' button is clicked
  submit = e => {
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
  }

  // All class components need a render method
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite Color:
          <input type="color"
          onChange={this.newColor}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

render(
  <FavoriteColorForm />,
  document.getElementById('root')
)
