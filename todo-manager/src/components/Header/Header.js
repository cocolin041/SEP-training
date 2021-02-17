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
				<nav>
					<a href="/dashboard">Dashboard</a>
					<a href="/counter">Counter</a>
				</nav>
			</div>
		)
	}
}

export default Header
