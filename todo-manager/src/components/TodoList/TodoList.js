import React, { Component } from 'react'
import Todo from '../Todo/Todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<section>
				TodoList
				<Todo></Todo>
			</section>
		)
	}
}

export default TodoList
