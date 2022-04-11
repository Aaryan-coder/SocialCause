import React from 'react'
import './index.css';
function About(){
	const image = "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

	return(
		<div>
		<div className = "img-container">
			<img src = {image} alt = "about us" className = "person-img" />
			</div>
			<h1 className = "about">About Us</h1>
			<div className = 'underline1'></div>
			<br />
			<hr />
		</div>
		)
}

export default About;