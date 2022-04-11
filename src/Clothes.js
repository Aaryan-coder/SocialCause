import React,{useState} from 'react';
import './index.css';
function Clothes(){
	const [number,setNumber] = useState('');
		const [size,setSize] = useState(' ');
		const [counter,setCounter] =  useState(0);

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log("Hello world")
	}
	const handleClick = () =>{
		alert("Thank you for your Donation!");
	}
	const handleIncrease = () =>{
		setCounter(counter + 1)
	}
	const handleDecrease = () =>{
		setCounter(counter - 1)
	}
	return(
		<div>
		<div className = "clothes">
		<h1>Clothes Details</h1>
		</div>
			<div className = "container4">
		<div className = "card4">
			<form onSubmit = {handleSubmit}>
		<div className = 'inputBox'>
		<label htmlFor = 'Number'><strong>Donor Contact Number:</strong> </label>
		<input type = 'number' 
		id = 'number' 
		name = 'number' 
		value = {number} 
		onChange = {(e)=>setNumber(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'Gender'>
		<strong>Gender</strong>: <br />
		<br />
		<input type = "radio" name = "gender" value = "male" />Male<br />
		<input type = "radio" name = "gender" value = "female" />Female<br />
		<input type = "radio" name = "gender" value = "other" />Other<br /> </label>
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'size'><strong>Size: </strong></label>
		<input type = 'number' 
		id = 'size' 
		name = 'size' 
		value = {size} 
		onChange = {(e)=>setSize(e.target.value)} />
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'Cloth'>
		<strong>Type of Clothes: </strong><br />
		<input type = "checkbox" name = "Cloth" value = "Shirt" />Shirt<br />
		<input type = "checkbox" name = "Cloth" value = "Pant" />Pant<br />
		<input type = "checkbox" name = "Cloth" value = "Saree" />Saree<br/> 
		<input type = "checkbox" name = "Cloth" value = "Sudithar" />Sudithar
		</label>
		<div className = 'inputBox'>
		<strong>Other: </strong><input type = "text" id = "other" name = "other"  />
		</div>
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'counter'><strong>Quantity: </strong></label>
		<input type = 'number' 
		id = 'counter' 
		name = 'Quantity' 
		value = {counter} 
		onChange = {(e)=>setCounter(e.target.value)} />
		<br />
		<div className = "click">
		<button type = 'button' onClick = {handleIncrease} >Increase</button>
		<button type = 'button' onClick = {handleDecrease} >Decrease</button>
		</div>
		</div>
		<div className = 'inputBox'>
		<label htmlFor = 'location'><strong>location: </strong></label>
		<input type = 'text' 
		id = 'location' 
		name = 'location'  />
		 <div className = 'inputBox'>
		<label htmlFor = 'date'><strong>Date of availability: </strong></label>
		<input type = 'date' 
		id = 'Date' 
		name = 'Date'  />
		</div>
		</div>
		<div className = "inputBox">
        <button type = 'submit' onClick = {handleClick}>Donate</button>
        </div>
		</form>
		</div>
		</div>
		</div>
		)
}

export default Clothes;