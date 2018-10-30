import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  increase() {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <div>Current count is: {count}</div>
        <button onClick={() => this.increase()}>+1</button>
      </div>
    )
  }
}

export default Counter
