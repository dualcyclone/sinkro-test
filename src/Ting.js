import { subscribe } from 'sinkro'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { map } from 'rxjs/operators'
import { someTing$, someTingElse$ } from './streams'

class Ting extends Component {
	componentDidMount() {
		someTing$.next('hello')
	}
	
	componentWillUnmount() {
		someTing$.next('bye')
	}
	
	render() {
		console.log('**** TING!', this.props.someTingElse)
		
		return (
			<p>{this.props.someTingElse}</p>
		)
	}
}

export default subscribe({
  someTingElse: someTingElse$
})(Ting)

