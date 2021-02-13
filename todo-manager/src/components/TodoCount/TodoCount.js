import React, { Component } from 'react'

import { withTodos } from '../../hoc/withTodos'

class TodoCount extends Component {
	render() {
		return <h1>Total Count: {this.props.count}</h1>
	}
}

export default withTodos(TodoCount)
