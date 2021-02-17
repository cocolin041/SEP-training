import React from 'react'
import './Logo.scss'

import RandomColorText from '../RandomColorText/RandomColorText'

function Logo() {
	return (
		<span className="logo">
			<RandomColorText>Todo Manager</RandomColorText>
		</span>
	)
}

export default Logo
