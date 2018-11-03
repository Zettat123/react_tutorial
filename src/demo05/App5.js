// list
import React from 'react'
import PlayerInfoItem from './PlayerInfoItem'
import ajax_data from './data'

class App5 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    window.setInterval(() => this.setState({ data: ajax_data }), 500)
  }

  render() {
    const { data } = this.state

    return (
      <div>
        {data.map(item => (
          <PlayerInfoItem data={item} />
        ))}
      </div>
    )
  }
}

export default App5
