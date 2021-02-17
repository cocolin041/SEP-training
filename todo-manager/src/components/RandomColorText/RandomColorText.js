import React, { Component } from 'react'

import { randomColor } from '../../utils/randomColor.util'

class RandomColorText extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: [],
		}
	}

	componentDidMount() {
		this._interval = setInterval(() => {
			this.setState({
				color: this.props.children.split('').map((_) => randomColor()),
			})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this._interval)
	}

	render() {
		return this.props.children.split('').map((char, idx) => (
			<span key={idx} style={{ color: this.state.color[idx] }}>
				{char}
			</span>
		))
	}
}

export default RandomColorText
