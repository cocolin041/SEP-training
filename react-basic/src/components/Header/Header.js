import React, { Component } from 'react'
import Logo from '../Logo/Logo'

class Header extends Component {
	render() {
		return (
			<header className="app-header">
				<Logo></Logo>
				<nav className="app-header__nav">
					<a href="./counter">Counter</a>
					<a href="./dashboard">Dashboard</a>
				</nav>
			</header>
		)
	}
}

export default Header
