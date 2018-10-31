// state
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

    console.log(`修改后的 count 为: ${this.state.count}`)
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Current count is: {count}</h1>
        <button onClick={this.increase.bind(this)}>+1</button>
      </div>
    )
  }
}

export default Counter
