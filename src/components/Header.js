import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'

//pass data from parent to a child with props. making use of atribu

export const Header = (props) => {
   
  return (
      <header className='header'>
          <h1>{props.title}</h1>
					<Button color='green' text='Add' />
      </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

//for writing types:
Header.prototype = {
    title: PropTypes.string
}

//create variable for styles
//<h1 style={headingStyle}>{props.title}</h1>
const headingStyle = {
    backgroundColor: 'pink',
    padding: '20px'
}

//I will only use inline style when there is dynamic styling.