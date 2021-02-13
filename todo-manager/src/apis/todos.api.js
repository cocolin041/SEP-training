export const getAllTodos = () =>
	//fetch will return a promise
	fetch('https://jsonplaceholder.typicode.com/todos/').then((response) =>
		response.json()
	)
