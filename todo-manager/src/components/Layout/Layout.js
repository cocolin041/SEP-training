import React, { Component } from 'react'
import Header from '../Header/Header'

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				<Header></Header>
				Layout
				<main>{this.props.children}</main>
			</div>
		)
	}
}

export default Layout
