import React, { Component } from 'react'
import Todo from '../Todo/Todo'
import { withTodos } from '../../hoc/withTodos'

import './TodoList.scss'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
		}
	}

	handleUserInputChange = (e) => {
		this.setState({
			userInput: e.target.value,
		})
	}

	handleUserSubmit = (e) => {
		e.preventDefault()
		this.setState({
			userInput: '',
		})
		const newTodo = {
			userId: 1,
			title: this.state.userInput,
		}
		this.props.addTodo(newTodo)
	}

	render() {
		const { todos, removeTodo } = this.props
		return (
			<section className="section-todolist">
				<div className="todolist-container">
					{/* we use form here for the semantic prespective */}
					<form className="todolist-form" onSubmit={this.handleUserSubmit}>
						<div className="todolist-form__row">
							<header className="todolist-header">{this.props.title}</header>
						</div>
						<div className="todolist-form__row">
							<input
								className="todolist-inputbar"
								placeholder="What are you going to do?"
								value={this.state.userInput}
								onChange={this.handleUserInputChange}
							></input>
						</div>
					</form>
					<ul className="todolist-items">
						{todos
							? todos.map((todo) => (
									<Todo
										key={todo.id}
										todo={todo}
										handleRemoveTodo={() => removeTodo(todo.id)}
									></Todo>
							  ))
							: null}
					</ul>
				</div>
			</section>
		)
	}
}

export default withTodos(TodoList)
