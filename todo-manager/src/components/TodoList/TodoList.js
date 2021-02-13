import React, { Component } from 'react'
import Todo from '../Todo/Todo'

import './TodoList.scss'

import { getAllTodos } from '../../apis/todos.api'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
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

	handleUserInputChange = (e) => {
		this.setState({
			userInput: e.target.value,
		})
	}

	handleUserInputSubmit = (e) => {
		e.preventDefault() //prevent the whole page from refreshing
		alert('submit')
	}

	render() {
		return (
			<section className="section-todolist">
				<div className="todolist-container">
					{/* we use form here for the semantic prespective */}
					<form className="todolist-form" onSubmit={this.handleUserInputSubmit}>
						<div className="todolist-form__row">
							<header className="todolist-header">TodoList</header>
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
						{this.state.todos
							? this.state.todos.map((todo) => (
									<Todo key={todo.id} todo={todo}></Todo>
							  ))
							: null}
					</ul>
				</div>
			</section>
		)
	}
}

export default TodoList
