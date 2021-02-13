import React, { Component } from 'react'
import './Todo.scss'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="todo">
				<p className="todo__content">Buy A Book</p>
				<button type="button" className="todo__btn-remove">
					X
				</button>
			</div>
		)
	}
}

export default Todo
