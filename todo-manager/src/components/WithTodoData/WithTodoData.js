import React, { Component } from 'react'
import { getAllTodos, addTodo, removeTodo } from '../../apis/todos.api'

class WithTodoData extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
		}
	}
	componentDidMount() {
		getAllTodos().then((data) => {
			this.setState({
				todos: data,
			})
		})
	}

	handlAddTodo = (newTodo) => {
		addTodo(newTodo).then((data) => {
			this.setState((preState) => {
				return {
					todos: [data, ...preState.todos],
				}
			})
		})
	}
	handleRemoveTodo = (id) => {
		removeTodo(id).then((data) =>
			this.setState((preState) => {
				return {
					todos: preState.todos.filter((todo) => todo.id !== id),
				}
			})
		)
	}
	render() {
		if (typeof this.props.render === 'function') {
			return this.props.render(
				this.state.todos,
				this.handlAddTodo,
				this.handleRemoveTodo
			)
		}
		if (typeof this.props.children === 'function') {
			return this.props.children(
				this.state.todos,
				this.handlAddTodo,
				this.handleRemoveTodo
			)
		}
		return null
	}
}

export default WithTodoData
