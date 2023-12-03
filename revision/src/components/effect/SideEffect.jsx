import React, {useState, useEffect} from 'react'

function SideEffect() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState(" ");

useEffect(() => {
	console.log(`count this numer : ${count}`)
document.title = `cliked ${count}`
	return () => {
		 
	}
},[ ])

 

	return (
		<div>
		<input type="text" value={name}  onChange={(e)=>setName(prev=>(prev,e.target.value))} />
		<button onClick={()=>setCount(count + 1)}> Click {count}</button>
		</div>
	)
}

export default SideEffect