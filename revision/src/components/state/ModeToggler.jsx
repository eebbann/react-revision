import React,{useState} from 'react'

export const ModeToggler = () => { 
	const [name, setName] = useState({dark:"darkman", light:"lightwoman"})
	 

	function handleClick(){
      setName(prevState => ({...prevState, dark: "darkManss"}));
	console.log(name.dark);
	}
	return (
		<div>
			 <h3>{name.dark}</h3>
		 <button onClick ={handleClick}>click</button>
		 </div>
		
	)
}
