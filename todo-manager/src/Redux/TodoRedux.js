// import { createStore } from 'redux'
const { createStore } = require('redux')

const initialState = {
	todos: [
		{ userId: 1, id: 1, title: 'first todo', completed: false },
		{ userId: 1, id: 2, title: 'second todo', completed: false },
		{ userId: 1, id: 3, title: 'third todo', completed: false },
	],
}

//action type
const GET_TODOS = 'GET_TODOS'
const ADD_TODOS = 'ADD_TODOS'
const REMOVE_TODOS = 'REMOVE_TODOS'

function TodosReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODOS:
			return {
				...state, //shallow copy using spread operator
				todos: [
					...state.todos,
					{ userId: 1, id: 4, title: 'forth todo', completed: false },
				],
			}
		default:
			return state
	}
}

let store = createStore(TodosReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: ADD_TODOS })
