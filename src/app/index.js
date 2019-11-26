import React from 'react'
import ReactDOM from 'react-dom'
import { Results } from '../components/results'
import styles from '../styles/index.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <Results
          endpoint='http://fake-hotel-api.herokuapp.com/api/hotels'
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
