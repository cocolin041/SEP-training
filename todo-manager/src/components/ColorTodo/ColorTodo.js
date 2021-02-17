import React, { Component } from 'react'
import '../Todo/Todo.scss'

import { limitCharStr } from '../../utils/limitCharStr.util'
import RandomColorText from '../RandomColorText/RandomColorText'

class ColorTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { id, userId, completed, title } = this.props.todo
		const { handleRemoveTodo } = this.props
		return (
			<li className="todo">
				<p className="todo__content">
					<RandomColorText>{limitCharStr(title, 40, '...')}</RandomColorText>
				</p>
				<button
					type="button"
					className="todo__btn-remove"
					onClick={() => handleRemoveTodo(id)}
				>
					X
				</button>
			</li>
		)
	}
}

export default ColorTodo
