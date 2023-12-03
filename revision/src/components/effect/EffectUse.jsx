import React from 'react'
import { useEffect, useState } from 'react';

function EffectUse() {
	const[isLoggedIn, setIsLoggedIn] = useState([ ]);

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(data => { console.log(data);
			 return (setIsLoggedIn(data ))})
	
	},[ ])


	return (
		<div>
		<ul>
			{isLoggedIn.map(x=> { 
				return (
			 <li className="lis" key={x.id}>{x.id} - {x.title}</li>
			)})}
		</ul>
		ddf</div>
	)
}

export default EffectUse