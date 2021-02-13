import React, { Component } from 'react'
import './App.css'

import Layout from './components/Layout/Layout'
import Counter from './components/Counter/Counter'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			test: null,
		}
	}

	static getDerivedStateFromProps(props, state) {
		console.log('App - getDerivedStateFromProps')
		return null
	}

	componentDidMount() {
		console.log('App - componentDidMount')
	}

	render() {
		console.log('App - render')
		return (
			<Layout content="Page1|Page2">
				<button
					onClick={() => {
						console.log('update')
						this.setState({
							test: 'test',
						})
					}}
				>
					Update
				</button>
				{!this.state.test ? <Counter></Counter> : null}
			</Layout>
		)
	}
}

export default App
