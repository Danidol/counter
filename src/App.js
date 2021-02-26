import { React, Component } from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      EyeBlinked: 0,
    }
  }

  clickHandler = () => {
    this.setState({ EyeBlinked: this.state.EyeBlinked + 1 })
  }

  clickHandler01 = () => {
    if (this.state.EyeBlinked === 0) {
      this.setState({ EyeBlinked: 0 })
    } else {
      this.setState({ EyeBlinked: this.state.EyeBlinked - 1 })
    }
  }

  clickHandler02 = () => {
    this.setState({ EyeBlinked: 0 })
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>{`Today you blinked: ${this.state.EyeBlinked} times`}</h1>

          <div className="btns">
            <button onClick={this.clickHandler}>Click +</button>
            <button onClick={this.clickHandler01}>Click -</button>
            <button onClick={this.clickHandler02}>Reset</button>
          </div>
        </div>
      </>
    )
  }
}

export default App
