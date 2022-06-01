import React from 'react'

export const Button = ({color, text}) => {

	const onClick = (e) => console.log('Button has been clicked');
	return (
		<button 
		onClick={onClick}
		style={{backgroundColor: color}} 
		className='btn'> { text}</button>
	)
}
