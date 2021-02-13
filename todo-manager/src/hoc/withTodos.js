import React, { Component } from 'react'
import { getAllTodos, addTodo, removeTodo } from '../apis/todos.api'

export const withTodos = (WrappedComponent) =>
	class extends Component {
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
				console.log(data)
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
			return (
				<WrappedComponent
					count={this.state.todos.length}
					todos={this.state.todos}
					addTodo={this.handlAddTodo}
					removeTodo={this.handleRemoveTodo}
					{...this.props}
				></WrappedComponent>
			)
		}
	}
