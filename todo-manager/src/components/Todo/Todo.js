import React, { Component } from 'react'
import './Todo.scss'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { id, userId, completed, title } = this.props.todo
		return (
			<li className="todo">
				<p className="todo__content">{title}</p>
				<button type="button" className="todo__btn-remove">
					X
				</button>
			</li>
		)
	}
}

export default Todo
