import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Again</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Message msg="here's a message"/>,
  document.getElementById('root')
  )
