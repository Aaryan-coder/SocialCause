import React,{useState} from 'react';
import clothes_data from './clothes_data'
import Clothes_search from './Clothes_search'
import './index.css';
function Cloth_details(){
	
	const [list,setList] = useState(clothes_data)
	const Library = () =>{
		return(
			<div>
		<div className = 'clothlist'>
		{list.map((cloth)=>{
		return(
			<Clothes_search key = {cloth.id} cloth = {cloth}  />
			)
	})}
	</div>
	</div>
	)}
	return(
		<Library />
	)
}

export default Cloth_details;