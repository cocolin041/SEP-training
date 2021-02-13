import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import TodoList from './components/TodoList/TodoList'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Layout>
				<TodoList></TodoList>
			</Layout>
		)
	}
}

export default App
