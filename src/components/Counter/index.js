import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    })) /* 2nd and the setState method is called so then the state will be updated*/
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    console.log('render() called') /* react batch updating */
    const {count} = this.state /* 3rd and render mathod will be called*/
    return (
      <div className="counter-container">
        <p className="count">Count {count}</p>{' '}
        {/* 4th and count will be updated*/}
        <div>
          <button className="increase-button" onClick={this.onIncrement}>
            Increase
          </button>{' '}
          {/* when click on increase button */}
          <button className="decrease-button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
