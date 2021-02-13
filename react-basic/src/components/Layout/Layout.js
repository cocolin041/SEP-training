import React, { Component } from 'react'
import Header from '../Header/Header'

class Layout extends Component {
	constructor(props) {
		super(props)
		console.log('Layout - construct')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Layout - getDerivedStateFromProps')
		return null
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(
	// 		'Layout - shouldComponentUpdate',
	// 		nextProps,
	// 		this.props,
	// 		nextState,
	// 		this.state
	// 	)
	// 	return nextProps.content !== this.props.content
	// }

	componentDidMount() {
		console.log('Layout - componentDidMount')
	}

	componentDidUpdate() {
		console.log('Layout - componentDidUpdate')
	}

	render() {
		console.log('Layout - render')

		return (
			<div>
				<Header />
				<main>{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
