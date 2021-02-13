import React, { Component } from 'react'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import './Layout.scss'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="app-container">
				<header className="app-header">
					<Header></Header>
				</header>
				<main className="app-content">
					<TodoList></TodoList>
				</main>
			</div>
		)
	}
}

export default Layout
