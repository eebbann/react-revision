import React,{useState} from 'react'

function CompleArray() {
	const [first, setfirst] = useState([{
		id:1, town:"boki", year:true
	}])
 
	const [people, setPeople] =useState(["pe","lo","po"])
	const [none, setNone] = useState(0);  

	const addValue =()=>{
		const  addData = {
			id:first.length + 1,
      town: people[none] +1,
			year:false

		}
	setfirst((prevState)=>[...prevState, addData])
	setNone((prevNone) => { 
		if(prevNone < 2){
			return prevNone + 1;
	} else return 0;
}
	)

}

		return (
		<div><ul>{first.map((x)=> (
				 <li key={x.id}> {x.first} - {x.town} : {x.year}</li>
		))}</ul>
		<button onClick={addValue}>Add</button>
		</div>
	)
}

export default CompleArray