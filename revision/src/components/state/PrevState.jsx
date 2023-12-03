import React, {useState} from 'react'



function PrevState() {
	const initialCount = 0 ;
	const [count, setCount] = useState(initialCount)

	function multiples(){
		for(let i=0; i<5; i++){
			setCount((prevState)=>prevState + 1)
		}
	}
	return (
		<div>
		Count: {count}
		<button onClick={()=> setCount(initialCount)}>Reset</button>
		<button onClick={()=> setCount(count+1)}>Add</button>
		<button onClick={()=> setCount(count - 1 )}>decrement</button>
		<button onClick={multiples}>multiple 5</button>



		</div>
	)
}

export default PrevState