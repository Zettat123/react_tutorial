// form
import React from 'react'

class App6 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  submit() {
    const { username, password } = this.state
    console.log(`username is: %s, password is %s`, username, password)
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <div>
          <input
            placeholder="username"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div>
          <button onClick={() => this.submit()}>submit</button>
        </div>
      </div>
    )
  }
}

export default App6
