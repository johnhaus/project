import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}



class SkiDayCounter extends Component {
  // Adding custom method with ES^ class
  // Class method getPercent- takes in a decimal and returns decimal * 100
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  // method takes in total and goal, and returns total/goal
  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render() {
    const {total, powder, backcountry, goal} = this.props
    return (
      <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Total Powder Days: {powder}</p>
      </div>
      <div>
        <p>Total Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
      </div>
      </section>
    )
  }
}

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal} />,
  document.getElementById('root')
  )
