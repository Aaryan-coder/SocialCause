import React from 'react'
import './index.css';
function Body(props){
	const {body} = props;
	return(
		<div>
		<br />
		<h3 className = "style">{body}</h3>
		<br />
		</div>
		)
}

export default Body;