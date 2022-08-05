import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);