import { subscribe } from 'sinkro'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { timer } from 'rxjs'
import { map } from 'rxjs/operators'
import Ting from './Ting'

class Example extends Component {
	constructor() {
		super()
		
		this.state = {
			display: false
		}
	}
	
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<button onClick={() => this.setState({ display: !this.state.display })}>
					{ this.state.display ? 'disable' : 'enable' }
				</button>
				<div>
					{ this.state.display ? <Ting /> : null }
				</div>
			</div>
		)
	}
}

const appRootElement = document.createElement('div')
document.body.appendChild(appRootElement)

render(
  <Example />,
  appRootElement
)
