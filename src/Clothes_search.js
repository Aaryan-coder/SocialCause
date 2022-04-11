import React, {useState} from 'react';
import './index.css';
const Clothes_search = (props) =>{
	const {id,Type,Availability,Quantity,Donor,Contact} = props.cloth
	const[show,setShow] = useState(false)
	const handleClick = (id) =>{
		setShow(!show)
	}
	return(
	<div className = "card9">
	<div key = {id}>
					<h1 className = 'head'>Donor: {Donor}</h1>
					<h2 className = 'head2'>Type: {Type}</h2>
					<h2 className = 'head2' >Quantity: {Quantity}</h2>
					<h3 className = 'head2'>Available: {Availability}</h3>
					<h4 className = 'head2'>{show?Contact:" "}</h4>
					<br />
					<button type = 'submit' className = 'Find' onClick = {()=>handleClick(id)}>{show?"Show less":"Contact Donor"}</button>
					</div>
				</div>
	)
}

export default Clothes_search;