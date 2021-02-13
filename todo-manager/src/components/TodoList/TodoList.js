import React, { Component } from 'react'
import Todo from '../Todo/Todo'

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
						<div className="todolist-form__row">
							<Todo></Todo>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default TodoList
