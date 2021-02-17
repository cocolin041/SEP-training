import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import TodoList from './components/TodoList/TodoList'
import TodoCount from './components/TodoCount/TodoCount'
import WithTodoData from './components/WithTodoData/WithTodoData'
import ColorTodo from './components/ColorTodo/ColorTodo'
import Todo from './components/Todo/Todo'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<Layout>
				<Router>
					<Switch>
						<Route path="/todolist">
							<WithTodoData
								render={(todos, addTodo, removeTodo) => (
									<TodoList
										title="My Todo List"
										todos={todos}
										addTodo={addTodo}
										removeTodo={removeTodo}
									>
										{(todos, removeTodo) =>
											todos
												? todos.map((todo) => (
														<ColorTodo
															key={todo.id}
															todo={todo}
															handleRemoveTodo={() => removeTodo(todo.id)}
														></ColorTodo>
												  ))
												: null
										}
									</TodoList>
								)}
							></WithTodoData>
						</Route>
						<Route path="/todocount">
							<WithTodoData>
								{(todos, addTodo, removeTodo) => (
									<TodoCount
										title="My Todo Count"
										count={todos.length}
									></TodoCount>
								)}
							</WithTodoData>
						</Route>
					</Switch>
				</Router>
			</Layout>
		)
	}
}

export default App
