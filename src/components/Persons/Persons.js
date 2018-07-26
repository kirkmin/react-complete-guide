import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor (props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount () {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount () {
    console.log('[Persons.js] Inside componentDidMount()');
    this.lastPersonRef.current.focus()
  }

  componentWillReceiveProps (nextProps) {
  	console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate (nextProps, nextState) {
  // 	console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
  // 	return true
  // }

  componentWillUpdate (nextProps, nextState) {
  	console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate () {
  	console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

	render () {	
		console.log('[Persons.js] Inside render()')
		return (
			this.props.persons.map((person, index) => {
			  return <Person
			    click = {() => this.props.clicked(index)}
          position={index}
			    name={person.name}
			    age={person.age}
          ref={this.lastPersonRef}
			    key={person.id}
			    changed={(e) => this.props.changed(e, person.id) } />
			})
		)
	}
}

export default Persons;