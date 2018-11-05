import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    console.log('%cconstructor', 'color:#339966')
  }

  static getDerivedStateFromProps(nextProps, state) {
    console.log(
      '%cgetDerivedStateFromProps: nextProps is: %o, state is: %o',
      'color:#0033ff',
      nextProps,
      state,
    )

    return null
  }

  componentDidMount() {
    console.log('%ccomponentDidMount', 'color:#339966')
    console.log('%c----------MOUNT COMPLETED----------', 'color:#FF0099')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '%cshouldComponentUpdate: nextProps is: %o, nextState is: %o',
      'color:#0033ff',
      nextProps,
      nextState,
    )

    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      '%cgetSnapshotBeforeUpdate: prevProps is: %o, prevState is %o',
      'color:#0033ff',
      prevProps,
      prevState,
    )

    return 'snapshot'
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      '%ccomponentDidUpdate: prevProps is: %o, prevState is %o, snapshot is %s',
      'color:#0033ff',
      prevProps,
      prevState,
      snapshot,
    )
    console.log('%c----------UPDATE COMPLETED----------', 'color:#FF0099')
  }

  componentWillUnmount() {
    console.log('%ccomponentWillUnmount', 'color:#ff9933')
    console.log('%c----------UNMOUNT COMPLETED----------', 'color:#FF0099')
  }

  increase() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { count } = this.state
    const { destroyComponent } = this.props

    console.log('%crender', 'color:#0033ff')

    return (
      <div>
        <h1>Current count is: {count}</h1>
        <button onClick={() => this.increase()}>+1</button>
        <div />
        <button onClick={() => destroyComponent()}>DESTROY</button>
      </div>
    )
  }
}

export default Counter
