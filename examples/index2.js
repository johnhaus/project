// Alternative ways of using React- for reference- not used now
// Before destructuring of "Component"
import React from 'react';
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends React.Component {
  render() {
    return (
      <section>
      <div>
        <p>Total Days: {this.props.total}</p>
      </div>
      <div>
        <p>Total Powder Days: {this.props.powder}</p>
      </div>
      <div>
        <p>Total Backcountry Days: {this.props.backcountry}</p>
      </div>
      <div>
        <p>Goal: {this.props.goal}</p>
      </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} />,
  document.getElementById('root')
)
