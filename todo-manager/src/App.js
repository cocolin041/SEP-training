import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import TodoList from './components/TodoList/TodoList'
import TodoCount from './components/TodoCount/TodoCount'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Layout>
				<Router>
					<Switch>
						<Route path="/todolist">
							<TodoList title="My Todo List"></TodoList>
						</Route>
						<Route path="/todocount">
							<TodoCount title="My Todo Count"></TodoCount>
						</Route>
					</Switch>
				</Router>
			</Layout>
		)
	}
}

export default App
