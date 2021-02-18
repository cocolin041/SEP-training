/**
 * Let's create our own Redux
 */

const initialState = {
	todos: [
		{ userId: 1, id: 1, title: 'first todo', completed: false },
		{ userId: 1, id: 2, title: 'second todo', completed: false },
		{ userId: 1, id: 3, title: 'third todo', completed: false },
	],
}

//action type
const ADD_TODOS = 'ADD_TODOS'

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

let store = myCreateStore(TodosReducer)

function myCreateStore(reducerFn) {
	//if the action that passed into reducer is not in all the cases, it'll return the initial state
	let state = reducerFn(undefined, { type: '__INIT__' })

	let listeners = []

	function subscribe(cb) {
		//subscribe is not going to trigger the callback function
		//it's just save the cb and trigger it after dispatch
		listeners.push(cb)
	}
	function getState() {
		return state
	}
	function dispatch(action) {
		state = reducerFn(state, action)
		listeners.forEach((listener) => listener())
	}
	return {
		subscribe,
		dispatch,
		getState,
	}
}

store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: ADD_TODOS })
