// lifecycle
import React from 'react'
import Count from './Count'

class Base extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      unmountCount: false,
    }
  }

  render() {
    const { unmountCount } = this.state

    return (
      <div>
        {unmountCount ? (
          <div />
        ) : (
          <Count
            destroyComponent={() => this.setState({ unmountCount: true })}
          />
        )}
      </div>
    )
  }
}

export default Base
