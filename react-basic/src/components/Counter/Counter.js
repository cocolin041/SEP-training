import React, { Component } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
		this.handleAdd = this.handleAdd.bind(this)
	}

	componentDidMount() {
		// this._intervalID = setInterval(() => {
		// 	this.setState({
		// 		counter: this.state.counter + 1,
		// 	})
		// 	console.log('interval triggered')
		// }, 1000)
	}
	componentWillUnmount() {
		// clearInterval(this._intervalID)
	}

	handleAdd() {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			}
		})
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			}
		})
	}

	render() {
		return (
			<>
				<h1>Counter: {this.state.counter}</h1>
				<button onClick={this.handleAdd}>Add</button>
			</>
		)
	}
}

export default Counter
