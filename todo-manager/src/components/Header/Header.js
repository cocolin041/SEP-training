import React, { Component } from 'react'
import Logo from '../Logo/Logo'

import './Header.scss'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className="header">
				<Logo></Logo>
				<a className="header-link" href="/todolist">
					TodoList
				</a>
				<a className="header-link" href="/todocount">
					TodoCount
				</a>
			</div>
		)
	}
}

export default Header
